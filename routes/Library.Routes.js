// buscar libros por filtros
// si libro no existe error -- 
// verificar que el admin es el mismo que la id del user logeado.

require('dotenv').config();
const express = require("express");
const { checkToken } = require("../middlewares");
const Library = require("../models/LibraryModel");
const LibraryRouter = express.Router();

// Crear Mi Biblioteca
LibraryRouter.post("/", checkToken, async(req, res) => {
    try {
        const { admin } = req.user;
        let { name, give } = req.body;

        let library = new Library({
            name,
            admin,
            give
        });
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

// Modificar datos de  Mi Biblioteca
LibraryRouter.put("/:id/update", checkToken, async(req, res) => {
    try {
        const { admin } = req.user;
        const { id } = req.params; // id de library
        let { name, give } = req.body;
        const library = await Library.findById(id);
        if (name) {
            library.name = name
        }
        /* if (admin) {
            library.admin = admin
        } */
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

// Eliminar  Mi Biblioteca
LibraryRouter.delete("/:id/delete", checkToken, async(req, res) => {
    try {
        const { admin } = req.user;
        const { id } = req.params; // id de library
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

// Añadir Libro a Mi Biblioteca
LibraryRouter.put("/:id/add-card", checkToken, async(req, res) => {
    try {
        const { admin } = req.user;
        const { id } = req.params; // id de library
        let { card } = req.body; // id de card
        let contain = { card, condition: true };
        const library = await Library.findById(id);

        //find
        library.cards.forEach(item => { //lluis con un find no funciona.
            if (item.card.equals(card)) {
                return res.status(400).send({
                    success: false,
                    message: "Este libro ya existe en tu biblioteca"
                });
            }
        });
        library.cards.push(contain);
        const addCard = await library.save();
        return res.status(200).send({
            success: true,
            library: addCard
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }

});

// Cambiar estado de 1 Libro de Mi Biblioteca
LibraryRouter.put("/:id/card-condition", checkToken, async(req, res) => {
    try {
        const { admin } = req.user;
        const { id } = req.params; // id de library
        const library = await Library.findById(id);
        let { card } = req.body; // id de card

        library.cards.find(item => {
            if (item.card.equals(card)) {
                item.condition = !item.condition;
                library.save();
                return res.status(200).send({
                    success: true,
                    message: item.condition ? "Libro Disponible" : "Libro No Disponible" // ternaria BUSCAR
                });
            };
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar 1 Libro de Mi Biblioteca
LibraryRouter.put("/:id/delete-card", checkToken, async(req, res) => {
    try {
        const { admin } = req.user;
        const { id } = req.params; // id de library
        const library = await Library.findById(id);
        let { card } = req.body; // id de card

        library.cards.forEach(function(ficha, index, object) {
            if (ficha.card.equals(card)) {
                object.splice(index, 1);
                library.save();
                return res.status(200).send({
                    success: true,
                    message: `La ficha se ha eliminado`
                });
            }
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
        const libraries = await Library.find().populate("cards.card", "title");
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
        const { id } = req.params; // id de library a buscar
        const library = await Library.findById(id).populate("cards.card", "title");
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

// Mostrar todos los libros de 1 Biblioteca
LibraryRouter.get("/find/:id/all-cards", async(req, res) => {
    try {
        const { id } = req.params; // id de library
        const library = await Library.findById(id).populate("cards.card", "title");

        let libroFind = library.cards.map(function(libro) {
            console.log(libro.card);
            return libro.card;
        });
        return res.send(libroFind);

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});


module.exports = LibraryRouter;