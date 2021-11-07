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
    number: { type: Number }, //lluis los numeros serán obligatorios en unos casos pero en otros no.
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
    format: { type: String },
    synopsis: { type: String }
});

module.exports = Card = mongoose.model("Card", CardSchema);