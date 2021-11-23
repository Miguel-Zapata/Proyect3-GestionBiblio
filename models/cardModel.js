const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ["Libro", "Cómic", "Juego de rol"]
    },
    portada: {
        type: String
    },
    cloudinary_id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    number: { type: Number },
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
    publication_Date: { type: Date },
    format: { type: String },
    synopsis: { type: String }
});

module.exports = Card = mongoose.model("Card", CardSchema);