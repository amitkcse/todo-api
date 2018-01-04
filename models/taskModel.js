var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskModel = new Schema({
   //_id : Schema.ObjectId,
   'title': String ,
   'text' : String
 }, {versionKey: false});
module.exports = mongoose.model('tasks', taskModel);
