const mongoose = require('mongoose');

const url_schema = new mongoose.Schema({
    original_url : {
        type : String,
        required : true
    },
    short_url : {
        type : String,
        required : true
    },
    created_at : {
        type : Date,
        required : true
    },
    expiary_at : {
        type : Date,
        required :true
    }
});

const url_model = mongoose.model('url', url_schema);

module.exports = url_model;