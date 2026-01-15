const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.BATABASE_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// productsFlow
// OMzJfIm5Ig8Hw1rA

export const productItems = colldb => {
  const dbName = 'productsFlow';
  const mydb = client.db(dbName).collection(colldb);
  return mydb;
};


