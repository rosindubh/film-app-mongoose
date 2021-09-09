const { Mongoose } = require("mongoose");
const Film = require("./film.model");
let readline = require("readline");
let fs = require("fs");

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
        console.log("\n\nMost likely this film aready in database... Please check!");
        console.log("If film not in database, please contact developer.")
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

exports.updateDate = async (updateObj) => {
    await Film.updateOne({name :updateObj.name}, {$set:{year: updateObj.year}});
        console.log(`${updateObj.name} updated to ${updateObj.year}`)
}

exports.badCommand = (badCommand) => {
    console.clear()
    console.log(`\n\n${badCommand} is not a recognised command GET A GRIP!!!\n`);
    console.log("Your options are:\nadd\nlist\nupdate-like\nupdate-year\ndelete\ncheck\nhelp")
    console.log("\n\nFOR HELP ENTER THE COMMAND BELOW:\nnode src/app.js help\n")
    
}

exports.help = () => {
    console.clear();
    // let readline = require("readline");
    // let fs = require("fs");
    let myInterface = readline.createInterface({
        input: fs.createReadStream('.//help.txt')
      });
      
      let lineno = 0;
      myInterface.on('line', function (line) {
        lineno++;
        console.log(line);
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

