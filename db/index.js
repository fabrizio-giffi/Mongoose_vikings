// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/valhalla", { family: 4 })
  .then(() => {
    console.log(`Connected to Mongo! Welcome to Valhalla!  🪓🛡️☠️`);
  })
  .catch((err) => {
    console.error("Error connecting to DB", err);
  });