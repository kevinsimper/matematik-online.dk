var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Matematik Online')
})

app.listen(3000, function () {
  console.log('Listen on port 3000')
})
