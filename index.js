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

<<<<<<< HEAD
=======
// inser many 


>>>>>>> 46970df7b8a5bc19c41e8c72a7b0f287e840d4a7
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

<<<<<<< HEAD
=======

>>>>>>> 46970df7b8a5bc19c41e8c72a7b0f287e840d4a7
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

<<<<<<< HEAD
=======

>>>>>>> 46970df7b8a5bc19c41e8c72a7b0f287e840d4a7
// user.updateOne({ name : "rohan"}, { age : 25 })
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

<<<<<<< HEAD
// user.findOneAndUpdate({ name : "rohan"}, { age : 35 }, {new : true})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// user.deleteOne({name : "omkar"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

user.findByIdAndDelete("666f045fe43abbdb35fd7982").then((res)=>{
=======
user.findOneAndUpdate({ name : "rohan"}, { age : 30 })
.then((res)=>{
>>>>>>> 46970df7b8a5bc19c41e8c72a7b0f287e840d4a7
  console.log(res);
}).catch((err)=>{
  console.log(err);
});
<<<<<<< HEAD
=======

>>>>>>> 46970df7b8a5bc19c41e8c72a7b0f287e840d4a7
