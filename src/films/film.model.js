const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
    },
    like: {
        type: String,
        required: true,
    },
});

const Film = mongoose.model("Film, filmSchema");

module.exports = Film;