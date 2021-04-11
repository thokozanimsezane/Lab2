'use strict'

const db = require('./db')
const path = require('path')
const express = require('express')
const mainRouter = express.Router()
mainRouter.get('/', function (req, res) {
  res.send('This is my basic website, pretty cool huh')
})

mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

mainRouter.get('/database', function (req, res) {
  // make a query to the database
  db.pools
  // Run query
    .then((pool) => {
      return pool.request()
      // This is only a test query, chnage it to whatever you need

        .query('SELECT * FROM Users')
    })
    // send back the result
    .then(result => {
      res.send(result)
    })
    // If there's an error, return that with some description
    .catch(err => {
      res.send({
        Error: err
      })
    })
})

module.exports = mainRouter
