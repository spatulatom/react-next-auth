import { getSession } from 'next-auth/react';

import { hashPassword, verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  console.log('request');
  if (req.method !== 'GET') {
    res.status(401).json({ message: 'Not a GET request' });
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  const userEmail = session.user.email;

  const client = await connectToDatabase();
  if (!client) {
    res.status(404).json({ message: 'Error connecting to the database!' });
    return;
  }

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    client.close();
    return;
  }

  if (user.jokes.length === 0) {
    console.log('NO LENGTH');
    res.status(404).json({ message: 'No saved jokes yet on your account. Go back to the Home page and save a joke that you like.' });
    client.close();
    return;
  }

  client.close();
  res.status(201).json(user.jokes);
}

export default handler;
