// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");

//Create a viking schema here
const vikingSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true,
    },
    strength: Number,
    weapon: String,
});

const VikingModel = model("viking", vikingSchema);
module.exports = VikingModel

//<======Don't forget Module.export ============>
//<================Schema=====================>
