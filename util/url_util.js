const mongoose = require('mongoose');
let murmur = require("murmurhash-js");
const url_model = require('../db/model/url');

const generate_expiary_date = (expiary_date) => {
    if(expiary_date !== undefined) return new Date(expiary_date);
    let dt = new Date();
    dt.setMonth(dt.getMonth() + 3);
    return dt;
};

const generate_encoded_short_url = (url) => {
    return murmur.murmur2(url + Date.now())
}

const save_url = async (url) => {
    const new_url = new url_model({
        original_url : url.url,
        short_url : generate_encoded_short_url(url.url),
        created_at : new Date(),
        expiary_at : generate_expiary_date(url.expiary_at)
    })
    
    try {
        return await new_url.save();
        // return new_url;
    } catch(error) {
        console.log(error);
        return {
            'error' : 'Internal Server Error'
        }
    }
};

const get_original_url = async (short_url) => {
    const result = await url_model.findOne({ short_url });
    return result.original_url;
}

module.exports = { save_url, get_original_url };
