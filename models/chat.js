const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        required: true
    },
    to : {
        type: String,
        required: true
    }, 
    msg : {
        type: String,
        maxLength: 50
    },
    created_at : {
        type: Date,
        required: true
    },
});

const Chat = mongoose.model("Chat", chatSchema); //Here, we have created a model named "Chat".

module.exports = Chat; //Here, we have exported our data to be used in index.js file. 