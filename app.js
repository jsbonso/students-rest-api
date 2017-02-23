var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Students!')
})

app.get('/test', function (req, res) {
  res.send('Testing 1 2 3!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
