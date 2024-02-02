const mongoose = require('mongoose');

const connect_to_database = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:1234@cluster0.c9jumia.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to mongodb');
    } catch(error) {
        console.log(error);
    }
};

connect_to_database();
