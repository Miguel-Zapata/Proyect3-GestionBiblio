const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    name: { type: String },
    cards: [{
            card: {
                type: mongoose.Types.ObjectId,
                ref: "Card"
            }
        },
        { condition: { type: Boolean } }
    ],
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    give: { type: Boolean }
});

module.exports = Library = mongoose.model("Library", LibrarySchema);