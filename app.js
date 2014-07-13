var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendfile('views/map.html');
});


var geo = new Object();
geo.title = 'Tanku SS';
geo.description = 'Just Testing Dynamic Mapping';
geo.feature = 'post';
geo.size = "small";
geo.color = "#FF0000";
geo.lat = -97.03221142292;
geo.long = 18.913371603574;



io.on('connection', function (socket) {
    console.log('a user connected');
    setTimeout(function () {
        
        io.emit('geojson', geo);
    }, 3000);

    
    socket.on('chat message', function (msg) {
    });
});





http.listen(process.env.PORT || 3000, function () {
    console.log('listening on *:3000');
});










/**
 * Module dependencies.
 */
/*
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var io = require('socket.io')(http);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/sock' , user.sock);
app.get('/users', user.list);


io.on('connection', function (socket) {
    console.log('a user connected');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
*/