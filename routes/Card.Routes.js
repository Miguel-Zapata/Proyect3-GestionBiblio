// Buscar fichas por filtros . Backend
// eliminar libro de todos los sitios --

const express = require("express");
const { checkToken } = require("../middlewares");
const Card = require("../models/CardModel");
const CardRouter = express.Router();

// Crea una Ficha
CardRouter.post("/", checkToken, async(req, res) => {
    try {
        // const { user } = req.user;
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

// Modificar Ficha // lluis Necesito que esto solo lo haga el admin de la web
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

// Eliminar Ficha // lluis Necesito que esto solo lo haga el admin de la web
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
CardRouter.get("/", checkToken, async(req, res) => {
    try {
        const cards = await Card.find({}).select("title number writer");
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
CardRouter.get("/find/:id", checkToken, async(req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findById(id).select("title number writer");
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

// Mostrar por filtros
CardRouter.get("/filters", checkToken, async(req, res) => {

    try {
        const { id } = req.params; // id de library
        let query = {};
        if (req.query.type) query.type = req.query.type;
        if (req.query.title) query.title = req.query.title;
        if (req.query.number) query.number = req.query.number;
        if (req.query.writer) query.writer = req.query.writer;
        if (req.query.editorial) query.editorial = req.query.editorial;
        if (req.query.genre) query.genre = req.query.genre;
        if (req.query.serie) query.serie = req.query.serie;
        if (req.query.language) query.language = req.query.language;
        if (req.query.isbn) query.isbn = req.query.isbn;

        let filter = await Card.find(query)
            .populate("type")
            .populate("title")
            .populate("number")
            .populate("writer")
            .populate("editorial")
            .populate("genre")
            .populate("serie")
            .populate("language")
            .populate("isbn")

        return res.json({
            success: true,
            filter
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