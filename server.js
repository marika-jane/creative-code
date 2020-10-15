const express = require('express')

const server = express()
const PORT = 3000

server.listen(PORT, function () {
  console.log('Server listening on port', PORT)
})

server.use(express.static('public'))
