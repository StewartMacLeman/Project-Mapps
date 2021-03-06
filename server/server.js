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
  const mapsCollection = db.collection('maps')
  const mapsRouter = createRouter(mapsCollection)
  app.use('/api/maps', mapsRouter)
  const miCollection = db.collection('mi')
  const miRouter = createRouter(miCollection)
  app.use('/api/mi', miRouter)
})
.catch(console.error)

app.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
})
