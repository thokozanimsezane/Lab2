'use strict'

const path = require('path')
const express = require('express')
const router = express.Router()

// our class list
const classList = require('./classList.js')

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList.getList()) // Respond with JSON
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

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  const studentObject = {
    name: req.body.student,
    studentNumber: req.body.studentNumber,
    courses: [req.body.courseOne, req.body.courseTwo]
  }
  classList.add(studentObject)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  console.log('deleting a student entry')
  classList.delete(req.body.indexStudentToDelete) // deleting a student
  // classList.deleteCourse(req.body.indexStud1, req.body.indexCourseToDelete)
  // classList.deleteCourse(req.body.indexStud2, req.body.indexCourseToDelete)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/edit', function (req, res) {
  console.log('editing a student', req.body.student)
  const editedStudent = {
    name: req.body.student,
    studentNumber: req.body.studentNumber,
    courses: [req.body.courseOne, req.body.courseTwo]
  }
  classList.edit(editedStudent, req.body.index)
  res.redirect(req.baseUrl + '/api/list')
})
module.exports = router
