const express = require('express')
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public')) 

app.get('/', function(req, res){
    res.render('index')
  }); 

http.listen(3000, function() {
    console.log('Listening on Port 3000');
});

//for testing, we're just going to send data to the client every second
setInterval( function() {

    /*
      our message we want to send to the client: in this case it's just a random
      number that we generate on the server
    */
    var msg = Math.random();
    io.emit('message', msg); 
  
}, 1000);