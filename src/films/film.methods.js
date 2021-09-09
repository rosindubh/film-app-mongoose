const { Mongoose } = require("mongoose");
const Film = require("./film.model");

exports.movieInDb = async (check) => {
    try {
        const film = await Film.findOne({ name: check.name });
        console.log(`${film.name} is in database`)
    } catch (error) {
        console.log(`${check.name} is not in database`)
        
    }
}
exports.addMovie = async (newFilm) => {
    console.log("running...")
    try {
        const movie = new Film(newFilm)
        await movie.save()
        console.log("closing connection...")
    } catch (error) {
        console.log(`\n\nError occured...\n ${error}`)
    }
};

exports.listMovies = async () => {
    try {
        const list = await Film.find({})
        console.log("running...")
        console.log(list)
        console.log("closing connection...")
    } catch (error) {
        console.log(`Error in listMovies ${error}`)
    }
}

exports.movieDelete = async (filter) => {
    try {
        console.log("running...")
        console.log(filter.name, "is being deleted")
        await Film.findOneAndDelete(filter)
        console.log(filter.name, "was deleted from database")
        console.log("closing connection...")
    } catch (error) {
        console.log(error);
        
    }
}

exports.updateDb = async (updateObj) => {
    await Film.updateOne({name :updateObj.name}, {$set:{like: updateObj.like}});
    console.log(`${updateObj.name} updated to ${updateObj.like}`)
}

exports.badCommand = (badCommand) => {
    console.log(`\n\n${badCommand} is not a recognised command GET A GRIP!!!`);
    console.log("Your options are\nadd\nlist\nupdate\ndelete\ncheck")
    
}



// https://mongoosejs.com/docs/api.html

//.
//├── app.js
//├── db
//│   └── connection.js
//└── films
//    ├── film.methods.js
//    └── film.model.js

