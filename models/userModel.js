const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

let regularExpresion = function(password) {
    var reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return reg.test(password);
};

const userSchema = new Schema({
    name: {
        type: String,
        required: "Por favor introduce un Nombre"
    },
    surname: {
        type: String,
        required: "Por favor introduce un Apellido"
    },
    userName: {
        type: String,
        required: "Por favor introduce un Nombre de Usuario",
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Por favor introduce una dirección de email",
        validate: [validateEmail, "Por favor introduce un email válido"],
    },
    password: {
        type: String,
        required: "Por favor introduce una Contraseña",
        minlength: 8,
        regex: [regularExpresion, "Por favor introduce una Contraseña válida"]
    }
});

module.exports = Test = mongoose.model("User", userSchema);