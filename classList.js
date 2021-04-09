'use strict'

// Private
const list = []
// Public
module.exports = {
  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  isEmpty: function () {
    if (list.length === 0) return true
    else return false
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1) // remove one element starting from index
  },
  getList: function () {
    return list
  },
  deleteCourse: function (studentIndex, courseIndex) { // each student has two courses
    list[studentIndex].courses.splice(courseIndex, 1)
  }
}
