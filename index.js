// getting-started.js
const mongoose = require('mongoose');
main().then(()=>{
    console.log("connection sucessfull");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = mongoose.Schema({
  name : String,
  email : String,
  age : Number,
});

const user = mongoose.model("User", userSchema);
// const employee = mongoose.model("Employee", userSchema);

// const user1 = new user ({
//   name : "omkar",
//   email : "omkardaswadkar123@gmail.com",
//   age : 23,
// });
// user1.save();

// const user2 = new user ({
//   name : "shubham",
//   email : "shubhamranjane123@gmail.com",
//   age : 23
// });
// user2.save();

// const user3 = new user ({
//   name : "rohan",
//   email : "rohandeshmukh123@gmail.com",
//   age : 23
// });
// user3.save().then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });
