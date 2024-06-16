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

// inser many 


// user.insertMany([
//   { name : "yash dhumal ",
//     email : "yashdhumal2820@gmail.com",
//     age : 24,
//   },
//   {
//     name : "avinash shide",
//     email:"avishinde@gmail.com",
//     age : 21,
//   },
//   {
//     name : "suraj gangarde",
//     email :"surajbhai@gmail.com",
//     age : 25,
//   },
//   {
//     name : "prasad dhasade",
//     email : "prasaddhasade@gmail.com",
//     age : 23
//   }
// ]).then((res)=>{
//   console.log(res);
// });


// user.find().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// user.find({age : {$gt:23}})
// .then((res)=>{
//   console.log(res[0].name);
// }).catch((err)=>{
//   console.log(err);
// });

// user.findById("666eee5ad398df2883f897c4")
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });


// user.updateOne({ name : "rohan"}, { age : 25 })
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

user.findOneAndUpdate({ name : "rohan"}, { age : 30 })
.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});

