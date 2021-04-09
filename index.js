'use strict'

const express = require('express')
const app = express()

// loading our routers
const mainRouter = require('./mainRoutes')
const classRouter = require('./classRoutes')

// mounting our routers
app.use(mainRouter)
app.use('/class', classRouter)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
