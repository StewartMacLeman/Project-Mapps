const express = require('express')
const ObjectId = require('mongodb').ObjectID;

const createRouter = function(collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err})
    })
  })

  router.put('/', (req, res) => {
  const updatedData = req.body;
  collection.findOneAndUpdate(
    // Now we need to find one and update it's details using this function. It takes two mandatory arguments (id and new data) and an optional third argument.
    {name: "result"},
    // id as an object
    {$inc: updatedData},
    // new data to update
    {returnOriginal: false}
    // returns the original instance (before the change) if true...
  )
  .then((result) => {res.json(result.value)
    // The result object contains a few bits of info (see ops above),value is the value of the new instance
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({status: 500, Error: err})
  })
})

  return router
}

module.exports = createRouter
