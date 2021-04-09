'use strict'

const path = require('path')
const express = require('express')
const router = express.Router()
const classList = []

// RESTFUL api
router.get('/api/list', function (req, res) {
  res.json(classList) // respond with JSON
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList.getList()[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.post('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

router.post('/api/create', function (req, res) {
  console.log('creating a student entry', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  console.log('deleting a student entry')
})

router.post('/api/edit', function (req, res) {
  console.log('editing a student entry')
})

module.exports = router
