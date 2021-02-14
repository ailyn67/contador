const express = require('express');
const app = express();
const port = 8000;

// para los post
app.use(express.json());
app.use(express.urlencoded({ extended : true}));


//  carpeta de views
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

// carpeta de static
app.use('/static', express.static("static"));

//crear constante como objeto
/*const users =[
  {firtsName : "Juanita", lastName : "Mella"},
  {firtsName : "Esteban", lastName : "Quito"},
  {firtsName : "Alan",    lastName : "Brito"},
  {firtsName : "Susana",  lastName : "Torio"}
];*/

app.get('/', function (req, res){

  if(req.session.count==undefined){
    req.session.count = 0;
  };
  req.session.count ++;
  return res.render('contador',{count:req.session.count});
});

app.get('/aumentar', function (req, res){
  req.session.count +=2;
  return res.render('contador', {count:req.session.count});
 });

app.get('/reinicio', function (req, res){
  req.session.count = 0;
  res.redirect('/');
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

