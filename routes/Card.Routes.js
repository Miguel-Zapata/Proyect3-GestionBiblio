// Buscar fichas por filtros 
// eliminar libro de todos los sitios --

const express = require("express");
const Card = require("../models/CardModel");
const CardRouter = express.Router();

// Crea una Ficha
CardRouter.post("/", async(req, res) => {
    try {
        let { type, title, number, writer, art, color, editorial, genre, serie, page_Number, language, isbn, publication_Date, format, synopsis } = req.body;
        let date

        if (publication_Date) {
            date = new Date(publication_Date);
            date.setHours(date.getHours() + 2);
        }
        console.log(date);


        let card = new Card({
            type,
            title,
            number,
            writer,
            art,
            color,
            editorial,
            genre,
            serie,
            page_Number,
            language,
            isbn,
            publication_Date: date,
            format,
            synopsis
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

// Modificar Ficha.
CardRouter.put("/find/:id/update", async(req, res) => {
    try {
        const { id } = req.params;
        let { type, title, number, writer, art, color, editorial, genre, serie, page_Number, language, isbn, publication_Date, format, synopsis } = req.body;
        const card = await Card.findById(id);
        if (type) {
            card.type = type
        }
        if (title) {
            card.title = title
        }
        if (number) {
            card.number = number
        }
        if (writer) {
            card.writer = email
        }
        if (art) {
            card.art = art
        }
        if (color) {
            card.color = color
        }
        if (editorial) {
            card.editorial = editorial
        }
        if (genre) {
            card.genre = genre
        }
        if (serie) {
            card.serie = serie
        }
        if (page_Number) {
            card.page_Number = page_Number
        }
        if (language) {
            card.language = language
        }
        if (isbn) {
            card.isbn = isbn
        }
        if (publication_Date) {
            card.publication_Date = publication_Date
        }
        if (format) {
            card.format = format
        }
        if (synopsis) {
            card.synopsis = synopsis
        }
        const updateCard = await card.save();

        return res.send({
            success: true,
            message: `${card.title} se ha modificado correctamente`
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar Ficha
CardRouter.delete("/find/:id/delete", async(req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findByIdAndDelete(id);
        return res.send({
            success: true,
            message: `la Ficha [${card.title}] a sido eliminada`
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar todas Fichas
CardRouter.get("/", async(req, res) => {
    try {
        const cards = await Card.find({});
        return res.send({
            success: true,
            cards
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar 1 Ficha
CardRouter.get("/find/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findById(id);
        return res.send({
            success: true,
            card
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