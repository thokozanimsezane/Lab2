'use strict'

const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

// loading our routers
const mainRouter = require('./mainRoutes')
const classRouter = require('./classRoutes')

// tell Express to use bosyParser for JSON and URL encoded from bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mounting our routers
app.use(mainRouter)
app.use('/class', classRouter)
app.use('/cdn', express.static('public')) /* This will mount your public directory to '/cdn'.
i.e. your scripts folder will be at /cdn/scripts */

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
