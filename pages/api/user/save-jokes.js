import { getSession } from 'next-auth/react';

import { hashPassword, verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(401).json({ message: 'Not a POST request' });
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  const userEmail = session.user.email;
  const joke = req.body;

  const client = await connectToDatabase();
  if (!client) {
    res.status(404).json({ message: 'Error connecting to MongoDb.' });
    return;
  }

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    client.close();
    return;
  }

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $push: { jokes: { joke: joke } } }
  );
  //   const result = await usersCollection.insertOne({
  //     joke: joke,
  //   });

  client.close();
  res.status(200).json({ message: 'Check SAVED JOKES tab in the MENU!' });
  
}

export default handler;
