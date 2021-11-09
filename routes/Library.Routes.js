// buscar libros por filtros
// si libro no existe error -- 

const express = require("express");
const Library = require("../models/LibraryModel");
const LibraryRouter = express.Router();

//Crear Biblioteca
LibraryRouter.post("/", async(req, res) => {
    try {
        let { name, admin, give } = req.body;

        let library = new Library({
            name,
            admin,
            give //Boolean(give)  //lluis
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

// Modificar datos de Biblioteca.
LibraryRouter.put("/find/:id/update", async(req, res) => {
    try {
        const { id } = req.params;
        let { name, admin, give } = req.body;
        const library = await Library.findById(id);
        if (name) {
            library.name = name
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

// Añadir Ficha
LibraryRouter.put("/find/:id/add-card", async(req, res) => {
    try {
        const { id } = req.params;
        let { card } = req.body;
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

// cambiar condition de ficha
LibraryRouter.put("/find/:id/change-condition", async(req, res) => {
    try {
        const { id } = req.params;
        const library = await Library.findById(id);
        let { card } = req.body;

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

// Eliminar Ficha de la biblioteca
LibraryRouter.put("/find/:id/delete-card", async(req, res) => {
    try {
        const { id } = req.params;
        const library = await Library.findById(id);
        let { card } = req.body;

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

// Mostrar todos los libros de la Biblioteca
LibraryRouter.get("/find/:id/all-cards", async(req, res) => {
    try {
        const { id } = req.params;
        const library = await Library.findById(id);

        let cosa = library.cards.map(function(libro) {
            console.log(libro.card);
            return libro.card;
        });
        return res.send(cosa);

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});


module.exports = LibraryRouter;