const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const strawberry = new Fruit({
  name: "Strawberry",
  score: 5,
  review: "Ok fruit"
})

//strawberry.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fruit"
  }
});


const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Hershey",
  age: 10,
  favoriteFruit: "6053f3f8a3ca047b5860e705"
})

//person.save();

// const orange = new Fruit({
//   name : "Orange",
//   score: 8,
//   review: "Makes tasty juice"
// });
//
// const banana = new Fruit({
//   name : "Banana",
//   score: 9,
//   review: "Great fruit. Like on sandwiches"
// });
//
// const kiwi = new Fruit({
//   name : "Kiwi",
//   score: 5,
//   review: "Ok fruit"
// });

// Fruit.insertMany([orange,banana, kiwi], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully added all fruits to fruitsDB");
//   }
// });


Fruit.find((err, fruits)=>{
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach(fruit=>console.log(fruit));

  }
});

// Fruit.updateOne({_id:"6053fceb66462c80f286b37c"},{name:"Cherry", review:"Cherries are good in coke and tropical drinks", score:6}, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//
//     console.log("Update was successful");
//   }
// });

// Fruit.deleteOne({_id:"6053fc85d3a60780aef96486"}, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Delete successful");
//   }
// })

// Person.updateOne({name:"John"}, {favoriteFruit:strawberry}, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//    console.log("Update was successful");
//   }
// });
