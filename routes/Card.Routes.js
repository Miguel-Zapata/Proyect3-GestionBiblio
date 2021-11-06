// Crear Ficha
// Modificar ficha
// Eliminar Ficha
// Mostrar todas las fichas
// Mostrar 1 ficha

const express = require("express");
const Card = require("../models/CardModel");
const CardRouter = express.Router();

// Crea una Ficha
CardRouter.post("/", async(req, res) => {
    try {
        let { type, title, number, author, writer, art, color, editorial, genre, serie, page_Number, language, isbn, publication_Date, description } = req.body;
        let card = new Card({
            type,
            title,
            number,
            author,
            writer,
            art,
            color,
            editorial,
            genre,
            serie,
            page_Number,
            language,
            isbn,
            publication_Date,
            description
        })
        const newCard = await card.save();
        return res.status(201).send({
            success: true,
            card: newCard
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

module.exports = CardRouter;