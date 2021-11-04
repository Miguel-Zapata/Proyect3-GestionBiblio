const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: { type: String },
    age: { type: Number }
});

module.exports = Test = mongoose.model("Test", testSchema);