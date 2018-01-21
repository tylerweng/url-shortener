import express from 'express'
import bodyParser from 'body-parser'

import database from './database/database'

import routes from './routes'

const setServer = cb => {
  const server = express()

  // Application-level environment vars
  server.set('env', process.env.NODE_ENV || 'development')
  server.set('host', process.env.HOST || '0.0.0.0')
  server.set('port', process.env.PORT || 8081)

  // Backend routes
  server.use('/', routes)

  // Application-level middleware
  // Handle uncaught server errors
  server.use((err, req, res, next) => {
    console.log(`Error on request ${req.method} ${req.url}`)
    console.log(err)
    console.log(err.stack)
    res.status(500).send(`Uncaught server error ${err}`)
  })

  const port = server.get('port')
  server.listen(port, console.log(`Server listening on port ${port}`))

  return server
}

const server = setServer()

export default server