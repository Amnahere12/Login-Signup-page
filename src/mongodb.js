const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignupPage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Mongoose connected");
});

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LogInModel = mongoose.model("collection1", LogInSchema);
module.exports = LogInModel;

