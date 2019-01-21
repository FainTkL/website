const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var HTTP_PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
   console.log(__filename);
     res.sendFile(path.join(__dirname, './index.html'));
  });
  
  app.use('/', router);
  app.listen(8080);
