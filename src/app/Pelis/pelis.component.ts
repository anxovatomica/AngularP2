import { Component } from "@angular/core"

@Component(
    {
        selector: 'pelis-tag',
        templateUrl: './pelis.component.html',
        styleUrls: ['./pelis.component.css'],
    }
)

export class PelisComponent {
    titulo: string = "ANGULAR PRACTICA 2: PELIS";
    main = ["Titulo", "Año", "Director", "Genero"];
    movieSelected = 0;
    /*Movies:*/ newTitle = ""; newYear = ""; newDirector = ""; newGenre = "";
    /*Contacts:*/ txt1: string; txt2: string; product: string; contact: string; product2: string;
    /*Actors:*/ newName: string; newSurname: string; newBirthdate: string; newNationality: string;
    
    peli = {
        titulo: "",
        ano: "",
        director: "",
        genero: "",
    };
    pelis = [{
        titulo: "Men In Black",
        ano: "2012",
        director: "Barry Sonnenfeld",
        genero: "COMEDIA",
        actores: [{
            nombre: "Will",
            apellido: "Smith",
            nacimiento: "1968, Philadelphia",
            nacionalidad: "US"
        }, {
            nombre: "Tommy",
            apellido: "Smith",
            nacimiento: "1968, Philadelphia",
            nacionalidad: "US"
        },],
    },
    {
        titulo: "Toy Story",
        ano: "2015",
        director: "Guillermo Del Toro",
        genero: "DEMONIO",
        actores: [{
            nombre: "Jaden",
            apellido: "Smith",
            nacimiento: "1968, Philadelphia",
            nacionalidad: "US"
        }, {
            nombre: "JB",
            apellido: "Dospiernas",
            nacimiento: "1968, Philadelphia",
            nacionalidad: "US"
        },]
    },
    {
        titulo: "Spiderman",
        ano: "2016",
        director: "Willy Greenwid",
        genero: "ACCION",
        actores: [{
            nombre: "Jason",
            apellido: "Pirelli",
            nacimiento: "1968, Philadelphia",
            nacionalidad: "US"
        }, {
            nombre: "Mary",
            apellido: "Jane",
            nacimiento: "1968, Philadelphia",
            nacionalidad: "US"
        },]
    }
    ];
    contacto = {
        contacto: "",
        email: ""
    }
    contactos = [{
        contacto: this.txt1,
        email: this.txt2,
    }];
    producto = [];
    final = [{
        finalC: "",
        finalP: ""
    }]
    asigna(){
        this.final.push({finalC: JSON.stringify(this.contactos[this.contact]), finalP: this.product});
        console.log(this.final)
    }
    /***** ADDS *****/
    addContact() {
        this.contactos.push({ contacto: this.txt1, email: this.txt2 });
    }
    addMovie() {
        this.pelis.push({ titulo: this.newTitle, ano: this.newYear, director: this.newDirector, genero: this.newGenre, actores: [] });
    }
    addActor() {
        this.pelis[this.movieSelected].actores.push({ nombre: this.newName, apellido: this.newSurname, nacimiento: this.newBirthdate, nacionalidad: this.newNationality })
    }
    addProduct(){
        this.producto.push(this.product);
    }
    /***** DELETES *****/
    delContact(index) {
        this.contactos.splice(index, 1);
    }
    delMovie(index) {
        this.pelis.splice(index, 1);
    }
    delActor(index) {
        this.pelis[this.movieSelected].actores.splice(index, 1);
    }
    delAsig(index){
        this.final.splice(index,1);
    }
}