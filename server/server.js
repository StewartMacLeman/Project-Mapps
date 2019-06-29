const express = require ('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');

app.use(parser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017')
.then ((client) => {
  const db = client.db('mapps')
  const countriesCollection = db.collection('countries')
  const countriesRouter = createRouter(countriesCollection)
  app.use('/api/countries', countriesRouter)
})
.catch(console.error)

app.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
})
