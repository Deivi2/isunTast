const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const CredentialsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surename: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: Date,
    max: moment(new Date()).format("yyyy-mm-dd")
  }
});

module.exports = Credentials = mongoose.model("credential", CredentialsSchema);
