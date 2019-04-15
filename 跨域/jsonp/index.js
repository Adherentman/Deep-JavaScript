let express = require('express');

let app = express()

app.get('/say', function(req, res) {
  let { wd, callback } = req.query
  console.log(wd)
  console.log(callback)
  res.end(`${callback}(${JSON.stringify({ip: '1321', city: 'ddsads', region_name: 'sdads'})})`)
})

app.listen(3000)