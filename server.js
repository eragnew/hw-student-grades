var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/students_dev');

var studentsRouter = require(__dirname + '/routes/students_routes');
app.use('/api', studentsRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server running on port ' + port);
});
