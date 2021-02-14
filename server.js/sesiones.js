
const express = require('express');
const app = express('express-session');
const port = 8000;

const app = express();

app.use(express-session({secret : 'ClaveSecreta'}));

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  req.session.count = 100
  console.log('count:' + req.session.count)
  return res.render('contador');
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );