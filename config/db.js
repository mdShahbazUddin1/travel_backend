const mongoose = require("mongoose");


const connection = mongoose.connect(
  "mongodb+srv://jackayron:9931797391@cluster0.lktan8g.mongodb.net/traveldata?retryWrites=true&w=majority"
);


module.exports = {connection}