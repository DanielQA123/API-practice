'use strict';

const bandName = document.querySelector("#bandName");
const musicians = document.querySelector("#musicians");

const bandIdRead = document.querySelector("#bandIdRead");

const bandIdUpdate = document.querySelector("#bandIdUpdate");
const bandNameUpdate = document.querySelector("#bandNameUpdate");

const bandIdDelete = document.querySelector("#bandIdDelete");

// Creating the function required for most of the crud functionality. 

//Create Functionality using the BandAPI: 
const createBand = () => {
    const bandName = _bandName.value;

    let data = {
        "musicans": [null],
        "name": bandName
    }

    fetch("http://localhost:8901/band/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`error${err}`));
}

//READ functionality of crud 
const readALLBand = () => {
    fetch("http://localhost:8901/band/read")
        .then(response => response.json())
        .then(info => {
            for (let band of info) {
                console.log(band);
            }
        })
        .catch(err => console.error(`error${err}`));
}

const readIdBand = () => {
    const bandIdRead = bandIdRead.value;

    fetch(`http://localhost:8901/band/read/${bandIdRead}`)
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`error${err}`));
}

const readByNameBrand = (name) => {
    fetch(`http://localhost:8901/band/read/${name}`)
        .then(response => response.json())
        .then(info => {
            for (let band of info) {
                console.log(band);
            }
        })
        .catch(err => console.error(`error${err}`));
}

//UPDATE functionality: 
const updateBand = () => {
    const bandIdUpdate = bandIdUpdate.value;
    const bandNameUpdate = bandNameUpdate.value;

    let data = {
        "musicians": null,
        "name": bandNameUpdate
    }

    fetch(`http://localhost:8901/band/update/${bandIdUpdate}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`error${err}`));
}

const deleteByIdBand = () => {
    const bandIdDelete = bandIdDelete.value;

    fetch(`http://localhost:8901/band/delete/${bandIdDelete}`,{
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json()
    .then(info => console.log(info))
    .catch(err => console.error(`error${err}`)));
}
