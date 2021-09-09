require("./db/connection");
const mongoose = require("mongoose");
const {addMovie} = require("./films/film.methods");
const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
        });
    }
    mongoose.disconnect();
};

app();