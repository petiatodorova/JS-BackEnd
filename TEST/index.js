const mongodb = require('mongodb');

const connectionStr = 'mongodb://127.0.0.1:27017';

const client = new mongodb.MongoClient(connectionStr, { useUnifiedTopology: true });

async function connectDb() {
    await client.connect();
    const db = client.db('myDB');
    const courses = db.collection('courses');
    const result = await courses.find().toArray();
    console.log(result);
}

connectDb();