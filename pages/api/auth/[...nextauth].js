import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

// this is catch all api route and it will catch routes like sign in and sign out and
// a few more, we can check them here:https://next-auth.js.org/getting-started/rest-api
// Futhermore it is a function NextAuth() that we will execute here
// but it is still an api route so it has to return api handler

export default NextAuth({
  // https://next-auth.js.org/configuration/options
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // https://next-auth.js.org/configuration/providers/credentials
        const client = await connectToDatabase();
        if (!client) {
          throw new Error('Connection to MongoDb failed!');
        }

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found! Email invalid!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in! Password invalid!');
        }

        client.close();
        // if we return an object inside of NextAuth we let NextAuth
        // know that authorization succeded, this object will then later be 
        // encoded into json web token
        return { email: user.email};
      },
    }),
  ],
});
