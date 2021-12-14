const express = require("express");
const upload = require("../multer");
const cloudinary = require("../claudinary");

const { checkToken } = require("../middlewares");
const Card = require("../models/CardModel");
const CardRouter = express.Router();

// Crea una Ficha
CardRouter.post("/", upload.single("portada"), checkToken, async(req, res) => {
    console.log(req.file.path);
    try {

            const result = await cloudinary.uploader.upload(req.file.path);
        
        const { type, portada, cloudinary_id, title, number, writer, art, color, editorial, genre, serie, page_Number, language, isbn, publication_Date, format, synopsis } = req.body;
        let date;

        /* if (type != Card.type) {
            return res.json({
                success: false,
                message: "Escoge un tipo válido (Libro, Cómic, Juego de rol)"
            });
        } */

        if (!type || !title || !writer || !editorial) {
            return res.status(400).json({
                success: false,
                message: "Rellena los campos obligatorios"
            });
        }

        if (publication_Date) {
            date = new Date(publication_Date);
            date.setHours(date.getHours() + 2);
        }

        let card = new Card({
            type,
            portada: result.secure_url,
            cloudinary_id: result.public_id,
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

// Modificar Ficha // SOLO ADMIN
CardRouter.put("/find/:id/update", upload.single("portada"), async(req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path); // ESTO TO SIEMPRE
        const { id } = req.params;
        const { type, portada, cloudinary_id, title, number, writer, art, color, editorial, genre, serie, page_Number, language, isbn, publication_Date, format, synopsis } = req.body;
        const card = await Card.findById(id);

        if (!card) {
            return res.json({
                success: false,
                message: "Este libro no existe"
            });
        }

        if (type) {
            card.type = type;
        }

        if ({ portada }) {
            await cloudinary.uploader.destroy(card.cloudinary_id);
            card.portada = result.secure_url;
        }
        if ({ cloudinary_id }) {
            card.cloudinary_id = result.public_id;
        }

        if (title) {
            card.title = title;
        }
        if (number) {
            card.number = number;
        }
        if (writer) {
            card.writer = writer;
        }
        if (art) {
            card.art = art;
        }
        if (color) {
            card.color = color;
        }
        if (editorial) {
            card.editorial = editorial;
        }
        if (genre) {
            card.genre = genre;
        }
        if (serie) {
            card.serie = serie
        }
        if (page_Number) {
            card.page_Number = page_Number;
        }
        if (language) {
            card.language = language;
        }
        if (isbn) {
            card.isbn = isbn;
        }
        if (publication_Date) {
            card.publication_Date = publication_Date;
        }
        if (format) {
            card.format = format;
        }
        if (synopsis) {
            card.synopsis = synopsis;
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

// Eliminar Ficha // SOLO ADMIN
CardRouter.delete("/find/:id/delete", async(req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findById(id);

        if (!card) {
            return res.json({
                success: false,
                message: "Este libro no existe"
            });
        }

        const cardDelete = await Card.findByIdAndDelete(card);
        await cloudinary.uploader.destroy(card.cloudinary_id);
        return res.send({
            success: true,
            message: `la Ficha [${cardDelete.title}] a sido eliminada`
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
        const cards = await Card.find({}).select("title portada number writer editorial language publication_Date");
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
        const card = await Card.findById(id);

        if (!card) {
            return res.status(404).json({
                success: false,
                message: "Este libro no existe"
            });
        }

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

        let filter = await Card.find(query).select("title number writer editorial publication_Date");
        /* .populate("type")
        .populate("title")
        .populate("number")
        .populate("writer")
        .populate("editorial")
        .populate("genre")
        .populate("serie")
        .populate("language")
        .populate("isbn") */

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