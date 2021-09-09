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

exports.updateDb = async (filter) => {
    await Film.findOneAndUpdate(filter)
}

exports.badCommand = (badCommand) => {
    console.log(`\n\n${badCommand} is not a recognised command GET A GRIP!!!`);
}


// await Film.findOneAndDelete(film)
// https://mongoosejs.com/docs/api.html
// await deleteMovie({
//             name: process.argv[3],
//         });