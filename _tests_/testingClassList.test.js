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
    expect(classList.getList().length).toBe(1)
    classList.add(studentObject)
    expect(classList.getList().length).toBe(2)
  })
})

describe('Sucesssfully deleting a student', () => {
  test('deleting a student', () => {
    classList.delete(1) // there are two students so far which were added from the previous test
    // so here, I am deleting the student at index 1
    expect(classList.getList().length).toBe(1)
    classList.delete(0)
  })

  test('checking that the list is now empty', () => {
    expect(classList.isEmpty()).toBe(true)
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
    const obtainedStudent1 = classList.get(0)
    expect(obtainedStudent1.name).toBe(student1.name)
    expect(obtainedStudent1.studentNumber).toBe(student1.studentNumber)
    expect(obtainedStudent1.courses[0]).toBe(student1.courses[0])
    expect(obtainedStudent1.courses[1]).toBe(student1.courses[1])
  })

  test('getting student 2', () => {
    const student2 = {
      name: 'Senamile',
      studentNumber: 1743523,
      courses: ['ELEN2000', 'ELEN2004']
    }
    classList.add(student2)
    const obtainedStudent2 = classList.get(1)
    expect(obtainedStudent2.name).toBe(student2.name)
    expect(obtainedStudent2.studentNumber).toBe(student2.studentNumber)
    expect(obtainedStudent2.courses[0]).toBe(student2.courses[0])
    expect(obtainedStudent2.courses[1]).toBe(student2.courses[1])
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
