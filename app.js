var express = require('express');
// var http = require('http');
var engines = require('consolidate');
var app = express();

// app.use(express.bodyParser());

// app.engine('.haml', require('hamljs').renderFile);
// app.engine('html', engines.haml);
app.engine('haml', engines.haml);
app.set('view engine', 'haml');
app.use('/views',express.static(__dirname + '/views'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));


app.get('/', function (req, res) {
	res.render('index', {});
	// res.send('hello world');
	console.log('hi');
});

app.listen(3000);
// http.createServer(app).listen(3000);
// module.exports = app;