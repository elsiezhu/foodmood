require('dotenv').config();
var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');


async function main() {
  /**
  * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
  * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
  */

  var user = process.env.MONGO_DB_USERNAME
  var pass = process.env.MONGO_DB_PASSWORD
  var cluster_url = process.env.MONGO_DB_CLUSTER_URL
  const uri = `mongodb+srv://${user}:${pass}@${cluster_url}/test?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    // await listDatabases(client);
 
  } catch (e) {
      console.error(e);
  } finally {
    await client.close();
  }

  console.log("MongoDB successfully connected")
}

// connect to mongodb
main().catch(console.error);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
