
/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");


function generateText(text){
    let i = new markov.MarkovMachine(text)
    console.log(i.makeText())
}

function makeText(path){

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          console.error(`Error reading ${path}: ${err}`);
          process.exit(1);
        }
        generateText(data);
      });
}


async function urlText(url){
    try{
        let res = await axios.get(url)
        generateText(res.data);
    }catch(err){
        console.error(`Error: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    urlText(path);
} else {
    makeText(path);
}