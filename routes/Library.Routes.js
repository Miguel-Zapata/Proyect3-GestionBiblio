// añadir libro
//cambiar estado libro

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
            give: Boolean(give)
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
LibraryRouter.put("/find/:id/add", async(req, res) => {
    try {
        const { id } = req.params; // condicion error se repite el libro
        let { card } = req.body;
        let contain = { card, condition: true };
        const library = await Library.findById(id);

        if (library.cards.includes(card) == true) {
            return res.status(400).send({
                success: false,
                message: "Este libro ya existe en tu biblioteca"
            });
        }




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