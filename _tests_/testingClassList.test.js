/* eslint-env jest */
'use strict'

// our class list array
const classList = require('../classList.js')

describe('Successfully adding a student', () => {
  test('adding a student', () => {
    const studentObject = {
      name: 'Lungisani',
      studentNumber: 1478317,
      courses: ['ELEN4010', 'ELEN4016']
    }
    classList.add(studentObject)
    expect(classList.getList().length).toBe(3)
    classList.add(studentObject)
    expect(classList.getList().length).toBe(4)
  })
})

describe('Sucesssfully deleting a student', () => {
  test('deleting a student', () => {
    classList.delete(1) // there are two students so far which were added from the previous test
    // so here, I am deleting the student at index 1
    expect(classList.getList().length).toBe(3)
  })
})

describe('Getting a paticular student from the list', () => {
  test('getting student 1 ', () => {
    const student1 = {
      name: 'Bandile',
      studentNumber: 1628323,
      courses: ['ELEN1004', 'ELEN1016']
    }
    classList.add(student1)
    const obtainedStudent1 = classList.get(3)
    expect(obtainedStudent1.name).toBe(student1.name)
    expect(obtainedStudent1.studentNumber).toBe(student1.studentNumber)
    expect(obtainedStudent1.courses[0]).toBe(student1.courses[0])
    expect(obtainedStudent1.courses[1]).toBe(student1.courses[1])
  })
})

describe('Sucessfully editing a student', () => {
  test('editing a student', () => {
    const newStudentDetails = {
      name: 'Patience',
      studentNumber: 1026332,
      courses: ['ELEN5000', 'ELEN5004']
    }
    classList.edit(newStudentDetails, 0) // editing student at index 0
    const editedStudent = classList.get(0)
    expect(editedStudent.name).toBe(newStudentDetails.name)
    expect(editedStudent.studentNumber).toBe(newStudentDetails.studentNumber)
    expect(editedStudent.courses[0]).toBe(newStudentDetails.courses[0])
    expect(editedStudent.courses[1]).toBe(newStudentDetails.courses[1])
  })
})

describe('Delete courses from a student', () => {
  test('delete course 1', () => {
    classList.deleteCourse(0, 0) // delete course 1 from student 1
    expect(classList.get(0).courses.length).toBe(1)
  })
  test('delete course 2', () => {
    classList.deleteCourse(0, 0) // delete course 2 which is now at index 0 because course 1 has been
    // deleted from the previous test
    expect(classList.get(0).courses.length).toBe(0)
  })
  test('student 1 has no courses now', () => {
    expect(classList.get(0).courses.length).toBe(0)
  })
})
