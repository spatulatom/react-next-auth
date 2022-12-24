import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
 
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
  },
  
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();
        if (!client) {
          throw new Error('Connection to MongoDb failed!');
        }

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        console.log('LOG IN');
        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email, message: 'You are logged in!' };
        
      },
    }),
  ],
});
