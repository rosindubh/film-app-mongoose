const { Mongoose } = require("mongoose");
const Film = require("./film.model");


exports.addMovie = async (newFilm) => {
    console.log("running...")
    try {
        const movie = new Film(newFilm)
        await movie.save()
        console.log("closing connection...")
    } catch (error) {
        console.log(`\n\nError occured...\n ${error}\n\n Most likely film aready exists, check your database MUPPET!`)
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
        console.log(filter)
        await Film.findOneAndDelete(filter)
        console.log("closing connection...")
    } catch (error) {
        console.log(error);
        
    }
}

exports.updateDb = async (updateObj) => {
    await Film.updateOne({name :updateObj.name}, {$set:{like: updateObj.like}});
}

exports.badCommand = (badCommand) => {
    console.log(`\n\n${badCommand} is not a recognised command GET A GRIP!!!`);
    console.log("Your options are\nadd\nlist\nupdate\ndelete")
    
}


// await Film.findOneAndDelete(film)
// https://mongoosejs.com/docs/api.html
// await deleteMovie({
//             name: process.argv[3],
//         });