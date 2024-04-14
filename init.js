const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then((res) => {
    console.log("Connection Succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/watsapp");
}
let allChats = [
    {
      from: "Rishav",
      to: "Vansh",
      msg: "Are you ok",
      created_at: new Date(),
    },
    {
      from: "Vansh",
      to: "Rishav",
      msg: "Yes I am",
      created_at: new Date(),
    },
    {
      from: "Bhavik",
      to: "Rishav",
      msg: "Hello",
      created_at: new Date(),
    },
    {
      from: "Rishav",
      to: "Bhavik",
      msg: "Hi",
      created_at: new Date(),
    },
  ];

Chat.insertMany(allChats);
