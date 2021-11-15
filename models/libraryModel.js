const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    cards: [{
        card: {
            type: mongoose.Types.ObjectId,
            ref: "Card"
        },
        condition: { type: Boolean }
    }],
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        unique: true,
        // required: true
    },
    give: {
        type: Boolean,
        required: true
    }
});

module.exports = Library = mongoose.model("Library", LibrarySchema);