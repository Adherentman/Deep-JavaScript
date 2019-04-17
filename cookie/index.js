let express = require('express');
let cors = require('cors');
const cookieParase = require('cookie-parser');

let app = express()

app.use(cookieParase());

app.use('/', (req, res) => {
  res.cookie('user', 'dsada');
  console.log(req.cookies);
  res.send('ojbk!');
})

app.listen(3000)