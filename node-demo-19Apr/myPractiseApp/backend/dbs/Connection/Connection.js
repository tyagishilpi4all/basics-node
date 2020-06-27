
const {dbURL} = require('../../utils/config');

const mongoose = require('mongoose');
mongoose.connect(dbURL , {useNewUrlParser:true});
var conn = mongoose.connection;

module.exports = conn;
