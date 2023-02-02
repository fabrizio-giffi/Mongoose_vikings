//Make sure to require your model so you can connect to the DB
const VikingModel = require("./models/User.js")

//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:

// This is Robert
const Robert = {
    firstName: "Robert",
    familyName: "Edgard",
    strength: 9,
    weapon: "Sword",
}

// Creating Robert inside the collection
// VikingModel.create(Robert)
//     .then((oneVik)=>{
//         console.log(oneVik, "Has been created")
//     })
//     .catch((err)=>{
//         console.log("You ran into an error:", err)
//     })

// FindByIdAndDelete
// VikingModel.findByIdAndDelete("63dba1331ea7039ed371f288")
//     .then((deletedVik)=>{
//         console.log("You deleted", deletedVik)
//     })
//     .catch((err)=>{
//         console.log("You ran into an error:", err)
//     })

// FindOneAndDelete
// VikingModel.findOneAndDelete({firstName: "Robert"})
    // .then((deletedVik)=>{
    //     console.log("You deleted", deletedVik)
    // })
    // .catch((err)=>{
    //     console.log("You ran into an error:", err)
    // })


// Viking Array
// const vikingArr = [
//     {   
//         firstName: "Bjørn",
//         familyName: "Torstenson",
//         strength: 50,
//         weapon: "Longbow",
//     },
//     {
//         firstName: "Helga",
//         familyName: "Edgardson",
//         strength: 50,
//         weapon: "Knife",
//     },
//     {
//         firstName: "Leif",
//         familyName: "Erikson",
//         strength: 25,
//         weapon: "Mace",
//     },
//     {
//         firstName: "Frida",
//         familyName: "Erikson",
//         strength: 70,
//         weapon: "Flowers",
//     }
// ]

// Insert Many iteration
// VikingModel.insertMany(vikingArr)
//     .then((allVikings)=>{
//         console.log("You created a lot of vikings:", allVikings)
//     })
//     .catch((err)=>{
//         console.log("You ran into an error:", err)
//     })

// updateOne
VikingModel.updateOne({familyName: "Erikson"}, {strength: 999}, {new: true})
    .then((updatedVik)=>{
        console.log("You updated succesfully", updatedVik)
    })
    .catch((err)=>{
        console.log("You ran into an error:", err)
    })

// FindOneAndUpdate
VikingModel.findOneAndUpdate({firstName: "Bjørn"}, {strength: 1000}, {new: true})
    .then((updatedVik)=>{
        console.log("You updated succesfully", updatedVik)
    })
    .catch((err)=>{
        console.log("You ran into an error:", err)
    })

// FindByIdAndUpdate
VikingModel.findByIdAndUpdate("63dba5613eb3451eda9b82e9", {strength: 130}, {new: true})
    .then((updatedVik)=>{
        console.log("You updated succesfully", updatedVik)
    })
    .catch((err)=>{
        console.log("You ran into an error:", err)
    })