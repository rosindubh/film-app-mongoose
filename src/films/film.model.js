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
    year: {
        type: String,
    }
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;



//.
//├── app.js
//├── db
//│   └── connection.js
//└── films
//    ├── film.methods.js
//    └── film.model.js