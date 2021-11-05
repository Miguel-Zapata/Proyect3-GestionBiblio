const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    type: { type: String },
    title: { type: String },
    number: { type: Number },
    author: { type: String },
    writer: { type: String },
    art: { type: String },
    color: { type: String },
    editorial: { type: String },
    genre: { type: String },
    serie: { type: String },
    page_Number: { type: Number },
    Language: { type: String },
    isbn: { type: Number },
    publication_Date: { type: Date },
    description: { type: String },
});

module.exports = Card = mongoose.model("Card", CardSchema);