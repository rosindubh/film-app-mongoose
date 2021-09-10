const { Mongoose } = require("mongoose");
const Film = require("./film.model");
let readline = require("readline");
let fs = require("fs");
const { Console } = require("console");
const prompt = require("prompt");


exports.movieInDb = async (check) => {
    console.clear();
    myCheck = check.name
    if (myCheck === undefined) {
        console.log(`\nNo film title after check...\n\nuse:\n node src/app.js help\nfor help\n`)
        }
        try {
            const film = await Film.findOne({ name: check.name });
            console.log(`${film.name} is in database`);
        } catch (error) {
            console.log(`${check.name} not in database`)
            
    }
}

exports.addMovie = async (newFilm) => {
    console.clear();
    console.log("running...")
    try {
        const movie = new Film(newFilm)
        await movie.save()
        console.log("closing connection...")
    } catch (error) {
        console.log(`\n\nError occured...\n ${error}`)
        console.log("\n\nMost likely this film aready in database... Please check!");
        console.log("If film not in database, please contact developer.")
    }
};

exports.listMovies = async () => {
    console.clear();
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
    console.clear();
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
    console.clear();
    await Film.updateOne({name :updateObj.name}, {$set:{like: updateObj.like}});
    console.log(`${updateObj.name} like updated to ${updateObj.like}`)
}

exports.updateDate = async (updateObj) => {
    console.clear();
    await Film.updateOne({name :updateObj.name}, {$set:{year: updateObj.year}});
        console.log(`${updateObj.name} year updated to ${updateObj.year}`)
}

exports.updateActor = async (updateObj) => {
    console.clear();
    await Film.updateOne({name :updateObj.name}, {$set:{actor: updateObj.actor}});
        console.log(`${updateObj.name} actor updated to ${updateObj.actor}`)
}



exports.badCommand = (badCommand) => {
    console.clear();
    console.log(`\n\n${badCommand} is not a recognised command GET A GRIP!!!\n`);
    console.log("Your options are:\nadd\nlist\nupdate-like\nupdate-year\nupdate-actor\ndelete\ncheck\nhelp\nshow-app\nshow-film-methods\nshow-film-model")
    console.log("\n\nFOR HELP ENTER THE COMMAND BELOW:\nnode src/app.js help\n")
    
}

exports.help = () => {
    console.clear();
    let myInterface = readline.createInterface({
        input: fs.createReadStream('.//help.txt')
      });
      let lineno = 0;
      myInterface.on('line', function (line) {
        lineno++;
        console.log(line);
      });
}

exports.showApp = () => {
    console.clear();
    let myInterface = readline.createInterface({
        input: fs.createReadStream('.//src/app.js')
      });
      let lineno = 0;
      myInterface.on('line',  function (line) {
        lineno++;
        console.log(lineno, line);
      });
}

exports.showFilmMethods = () => {
    console.clear();
    let myInterface = readline.createInterface({
        input: fs.createReadStream('.//src/films/film.methods.js')
      });
      let lineno = 0;
      myInterface.on('line',  function (line) {
        lineno++;
        console.log(lineno, line);
      });
}

exports.showFilmModel = () => {
    console.clear();
    let myInterface = readline.createInterface({
        input: fs.createReadStream('.//src/films/film.model.js')
      });
      let lineno = 0;
      myInterface.on('line',  function (line) {
        lineno++;
        console.log(lineno, line);
      });
}

exports.showConnection = () => {
    console.clear();
    let myInterface = readline.createInterface({
        input: fs.createReadStream('.//src/db/connection.js')
      });
      let lineno = 0;
      myInterface.on('line',  function (line) {
        lineno++;
        console.log(lineno, line);
    });
}

// https://mongoosejs.com/docs/api.html

//.
//├── app.js
//├── db
//│   └── connection.js
//└── films
//    ├── film.methods.js
//    └── film.model.js

