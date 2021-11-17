const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: "Por favor introduce un Nombre"
    },
    surname: {
        type: String,
        required: "Por favor introduce un Apellido"
    },
    user_Name: {
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
    },
    bookings: [{
        type: mongoose.Types.ObjectId,
        ref: "Booking"
    }]
});

module.exports = User = mongoose.model("User", UserSchema);