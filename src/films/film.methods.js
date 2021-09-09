const Film = require("./film.model");


exports.addMovie = async (newFilm) => {
    try {
        const movie = new Film(newFilm)
        await movie.save()
    } catch (error) {
        console.log(error)
    }
};
