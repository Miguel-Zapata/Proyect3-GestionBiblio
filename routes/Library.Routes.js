// Crear Biblioteca
// Modificar datos de la Biblioteca
// Eliminar Biblioteca
// Mostrar Todas las Bibliotecas
// Mostrar una biblioteca

const express = require("express");
const Library = require("../models/LibraryModel");
const LibraryRouter = express.Router();

//Crear Biblioteca
LibraryRouter.post("/", async(req, res) => {
    try {
        let { name, cards, card, condition, admin, give } = req.body; //lluis

        let library = new Library({
            name,
            cards: {
                card,
                condition
            },
            admin,
            give
        })
        const newLibrary = await library.save();
        return res.status(201).send({
            success: true,
            library: newLibrary
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Modificar datos de Biblioteca.
LibraryRouter.put("/find/:id/update", async(req, res) => {
    try {
        const { id } = req.params;
        let { name, cards, card, condition, admin, give } = req.body;
        const library = await Library.findById(id);
        if (name) {
            library.name = name
        }

        //lluis

        if (card) {
            library.cards.card = card
        }
        if (condition) {
            library.cards.condition = condition
        }
        if (admin) {
            library.admin = admin
        }
        if (give) {
            library.give = give
        }
        const updateLibrary = await library.save();

        return res.send({
            success: true,
            message: `${library.name} se ha modificado correctamente`
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar Biblioteca
LibraryRouter.delete("/find/:id/delete", async(req, res) => {
    try {
        const { id } = req.params;
        const library = await Library.findByIdAndDelete(id);
        return res.send({
            success: true,
            message: `La Biblioteca ${library.name} a sido eliminada`
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar todas las Bibliotecas
LibraryRouter.get("/", async(req, res) => {
    try {
        const libraries = await Library.find({});
        return res.send({
            success: true,
            libraries
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Mostrar 1 Biblioteca.
LibraryRouter.get("/find/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const library = await Library.findById(id);
        return res.send({
            success: true,
            library
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

module.exports = LibraryRouter;