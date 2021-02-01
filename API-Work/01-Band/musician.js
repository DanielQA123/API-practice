'use strict';

//Listing all the attributes <=> Making my constructor like java

const musicianName = document.querySelector("#musicianName");
const strings = document.querySelector("#strings");
const genre = document.querySelector("#genre");

const musicanIdRead = document.querySelector("#musicianIdRead");

const musicianIdUpdate = document.querySelector("#musicianIdUpdate");
const musicianNameUpdate = document.querySelector("#musicianNameUpdate");
const musicianStringsUpdate = document.querySelector("#musicianStringsUpdate");
const musicianGenreUpdate = document.querySelector("#musicianGenreUpdate");

const musicianIdDelete = document.querySelector("#musicianIdDelete");

//CREATE functionality: 

const createMusician = () => {
    const musicianNameValue = musicianName.value;
    const stringsValue = strings.value;
    const genreValue = genre.value;

    let data = {
        "band": null,
        "name": musicianNameValue,
        "strings": stringsValue,
        "genre": genreValue
    }

    fetch("http://localhost:8901/musician/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`Something has gone wrong!! ${err}`));
}

//READ functionality: 

const musiciansRead = () => {
    fetch("http://localhost:8901/musician/read")
        .then(response => response.json())
        .then(info => {
            for (let musician of info) {
                console.log(musician);
            }
        })
        .catch(err => console.log(`error ${err}`));
}

const musiciansByNames = () => {
    fetch("http://localhost:8901/musician/read/names")
        .then((response) => {
            //To check that the response is OK (i.e. 200)
            if (response.status !== 200) {
                throw new Error("I don't have a status of 200 at the moment");
            } else {
                console.log(`response ois ok (200)`);
                //JSON-ify it which returns a promise 
                response.json().then((infofromserver) => {
                    console.log(infofromserver);
                    console.log(infofromserver.data);
                    for (let musicians of infofromserver.data) {
                        console.log(musicians.name);
                        printNameToScreen(musicians.name);
                    }
                })

            }

        })
        .catch((err) => {
            console.error(err);
        })
}

const musiciansByStrings = () =>{
    fetch("http://localhost:8901/musician/read/strings")
    .then((response) =>{
        if(response.status !==200){
            throw new Error("I don't have a status of 200");
        }
    })
}

