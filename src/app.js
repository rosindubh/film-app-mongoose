require("./db/connection");
const mongoose = require("mongoose");
const {addMovie, listMovies, movieDelete, badCommand, updateDb} = require("./films/film.methods");
const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
        });
    }
    else if (command === "list") {
        await listMovies();
    }
    else if (command === "delete") {
        await movieDelete({
            name: process.argv[3],
        })
    }
    else if(command === "update") {
        await updateDb({
            name: process.argv[3],
            like: process.argv[4],
        })
    }

    else {
        badCommand(command);
        mongoose.disconnect();
    }
    mongoose.disconnect();
};

app();