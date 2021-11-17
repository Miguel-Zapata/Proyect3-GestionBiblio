// REVISADO. TODO FUNCIONA

const express = require("express");
const Library = require("../models/LibraryModel");
const LibraryRouter = express.Router();

// Crear Mi Biblioteca
LibraryRouter.post("/", async(req, res) => {
    try {
        const admin = req.user.id;
        const { name, give } = req.body;

        let library = new Library({
            name,
            admin,
            give
        });

        if (!admin) {
            return res.json({
                message: "admin Requerido"
            });
        }

        let libraryAdmin = await Library.findOne({ admin });
        console.log(libraryAdmin);
        if (libraryAdmin) {
            return res.json({
                success: false,
                message: "Solo se puede tener 1 Biblioteca por Usuario"
            });
        }

        let libraryName = await Library.findOne({ name });
        if (libraryName) {
            return res.json({
                success: false,
                message: "El nombre de Biblioteca ya está en uso"
            });
        }

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
LibraryRouter.put("/update", async(req, res) => {
    try {
        const admin = req.user.id;
        const { id } = req.params; // id de library
        let { name, give } = req.body;
        // const library = await Library.findById(id);
        const library = await Library.findOne({ admin });
        console.log(library);

        if (library.admin) {

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
        }

        if (!library.admin) {

            return res.json({
                success: false,
                message: "Esta no es tu Biblioteca"
            })
        }


    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar  Mi Biblioteca
LibraryRouter.delete("/delete", async(req, res) => {
    try {
        const admin = req.user.id;
        const { id } = req.params; // id de library
        const library = await Library.findOneAndDelete({ admin });

        if (!library.admin) {
            return res.json({
                success: false,
                message: "Esta no es tu Biblioteca"
            });
        }
        // if (library.admin) {}
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
LibraryRouter.put("/add-card", async(req, res) => {
    try {
        const admin = req.user.id;
        const { id } = req.params; // id de library
        let { card } = req.body; // id de card
        let contain = { card, condition: true };
        const library = await Library.findOne({ admin });

        if (!library.admin.equals(admin)) {
            return res.json({
                success: false,
                message: "Esta no es tu Biblioteca"
            });
        }

        let repetido = library.cards.find(item => {
            console.log(item);
            return item.card.equals(card);
        });
        console.log(repetido);
        if (repetido) {
            return res.status(400).send({
                success: false,
                message: "Este libro ya existe en tu biblioteca"
            })
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

// Cambiar estado de 1 Libro de Mi Biblioteca
LibraryRouter.put("/card-condition", async(req, res) => {
    try {
        const admin = req.user.id;
        const { id } = req.params; // id de library
        const library = await Library.findOne({ admin });
        let { card } = req.body; // id de card

        if (!library.admin.equals(admin)) {
            return res.json({
                success: false,
                message: "Este Libro no pertenece a tu Biblioteca"
            });
        }

        let encontrado = library.cards.find(item => {
            return item.card.equals(card);
        });
        if (encontrado) {
            encontrado.condition = !encontrado.condition;
            library.save();
            return res.status(200).send({
                success: true,
                message: encontrado.condition ? "Libro Disponible" : "Libro No Disponible" // ternaria BUSCAR
            });
        };
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// Eliminar 1 Libro de Mi Biblioteca
LibraryRouter.put("/delete-card", async(req, res) => {
    try {
        const admin = req.user.id;
        const { id } = req.params; // id de library
        const library = await Library.findOne({ admin });
        let { card } = req.body; // id de card

        if (!library.admin.equals(admin)) {
            return res.json({
                success: false,
                message: "Este Libro no pertenece a tu Biblioteca"
            });
        }

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

        /* let cardDelete = library.cards.findOneAndDelete({ card });
        console.log(cardDelete);
        library.save();
        return res.status(200).send({
            success: true,
            message: `La ficha ${cardDelete} se ha eliminado`
        }); */

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