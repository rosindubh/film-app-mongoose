const Film = require("./film.model");


exports.addMovie = async (newFilm) => {
    try {
        const movie = new Film(newFilm)
        await movie.save()
    } catch (error) {
        console.log(error)
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
