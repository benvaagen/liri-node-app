//code to read read and set any environment variables with the dotenv package
require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var spotifyPackage = require("node-spotify-api");
// * You should then be able to access your keys information like so
  var spotify = new Spotify(keys.spotify);

// process.argv
console.log(process.argv);

console.log(process.argv[2], "----", process.argv[3]);
var search = process.argv[3]



//------------------------------------Functions------------------------------------
//    This determines what the user is trying to do, and uses that information to find the information they are looking.
if (process.argv[2] == "movie-this") {
    movieThis();
} else if (process.argv[2] == "concert-this") {
    concertThis();
} else if (process.argv[2] == "spotify-this") {
    spotifyThis();
} else if (process.argv[2] == "do-what-it-says") {
    doThis();
}

function movieThis() {
    console.log("they wanna see a movie")
    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
};

function concertThis() {
    console.log("they wanna see a concert")
};

function spotifyThis() {
    console.log("They wanna find song")
    axios.get("https://api.spotify.com/v1/search&q=" + search).then(function(response) {
        console.log(response);
    }) //need to make an algorithm so that a user can search something that is more than one word
};

function doThis() {
    console.log("Do what random.txt says")
};







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ File Write ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//~~~~~~~~~~~~~~~~~~~~~~~~~~ SPOTIFY Artist Name Retrieval ~~~~~~~~~~~~~~~~~~~~~~~~




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SPOTIFY End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ OBMD Call ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ OBMD END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BANDS-IN-TOWN call function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BANDS-IN-TOWN END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DO-WHAT-IT-SAYS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~