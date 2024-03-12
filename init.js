const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

let allChats = [
    {
        from: "Het",
        to: "Akshat",
        msg: "msg1",
        created_at: new Date(),
    },

    {
        from: "Hetal",
        to: "Akshati",
        msg: "msg2",
        created_at: new Date(),
    },
 
    {
        from: "Krish",
        to: "Yash",
        msg: "msg3",
        created_at: new Date(),
    },

    {
        from: "Krisha",
        to: "Yashika",
        msg: "msg4",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats); 