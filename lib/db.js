import { MongoClient } from 'mongodb';
console.log('password')
export async function connectToDatabase() {
  console.log('passwordd', process.env.DB_NAME)
  const client = await MongoClient .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@freecluster.qqg7h.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )

  return client;
}
