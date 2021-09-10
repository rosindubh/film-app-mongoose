require("./db/connection");
const mongoose = require("mongoose");
const {addMovie, listMovies, movieDelete, badCommand, updateDb, movieInDb, updateDate, updateActor, help, showApp, showFilmMethods, showFilmModel} = require("./films/film.methods");
const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
            year: process.argv[6],
        });
    }
    else if (command === "list") {
        await listMovies();
    }
    else if (command === "delete") {
       await movieInDb({
           name: process.argv[3],
        })
        await movieDelete({
            name: process.argv[3],
        })
    }
    else if(command === "update-like") {
        await updateDb({
            name: process.argv[3],
            like: process.argv[4],
        })
    }

    else if(command === "update-year") {
        await updateDate({
            name: process.argv[3],
            year: process.argv[4],
        })
    }

    else if(command === 'update-actor') {
        await updateActor({
            name: process.argv[3],
            actor: process.argv[4],
        })
    }

    else if (command === "check") {
        await movieInDb({
            name: process.argv[3],
        });
    }

    else if(command === "help") {
        await help()
    }

    else if(command ==="show-app") {
        await showApp({
            name: process.argv[3],
        })
    }

    else if(command === 'show-film-methods') {
        await showFilmMethods({
            name: process.argv[3],
        })
    }

    else if(command == 'show-film-model') {
        await showFilmModel({
            name: process.argv[3],
        })
    }

    else {
        badCommand(command);
        mongoose.disconnect();
    }
    mongoose.disconnect();
};

app();

//.
//├── app.js
//├── db
//│   └── connection.js
//└── films
//    ├── film.methods.js
//    └── film.model.js
