import { MongoClient } from 'mongodb'

const uri: string = process.env.MONGODB_URI || '';

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

const client = new MongoClient(uri, options)
const clientPromise = client.connect()

export default clientPromise