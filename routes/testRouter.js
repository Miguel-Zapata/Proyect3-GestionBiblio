const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const testRouter = express.Router();
const Test = require("../models/testmodel.js");

testRouter
    .route("/")
    .post(async(req, res) => {
        let { name, age } = req.body;
        let persona = {
            name,
            age
        }
        let personaModel = new Test(persona);
        await personaModel.save();
        res.send(personaModel);

    })
    .get((req, res) => {
        Test.find({}, (err, tests) => {
            if (err) {
                return res.status(403).send({
                    success: false,
                    message: err
                });
            }
            res.send(tests);
        });
    });

testRouter.get("/test", (req, res) => {
    res.send("prueba");
})

module.exports = testRouter;