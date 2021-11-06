const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    number: { type: Number }, //lluis
    author: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    art: { type: String },
    color: { type: String },
    editorial: {
        type: String,
        required: true
    },
    genre: { type: String },
    serie: { type: String },
    page_Number: { type: Number },
    language: { type: String },
    isbn: { type: Number },
    publication_Date: { type: Date }, //lluis la fecha sale mal
    description: { type: String },
});

module.exports = Card = mongoose.model("Card", CardSchema);