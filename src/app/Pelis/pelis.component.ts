import { Component } from "@angular/core"

@Component(
    { selector: 'pelis-tag',
    templateUrl: './pelis.component.html',
    styleUrls: ['./pelis.component.css'],
    }
)

export class PelisComponent{
    titulo:string="ANGULAR PRACTICA 2: PELIS";
    main = ["Titulo", "Año", "Director", "Genero"];
    peli={
        titulo: "",
        ano: "",
        director: "",
        genero: ""
    };
    pelis=[{
        titulo: "Men In Black",
        ano: "2012",
        director: "Barry Sonnenfeld",
        genero: "COMEDIA"
    },{
        titulo: "Toy Story",
        ano: "2015",
        director: "Guillermo Del Toro",
        genero: "DEMONIO"
    },{
        titulo: "Spiderman",
        ano: "2016",
        director: "Willy Greenweed",
        genero: "ACCION"
    }
];
    addMovie(){
        this.pelis.push(JSON.parse(JSON.stringify(this.peli)));
    }
    delMovie(index){
        this.pelis.splice(index, 1);
    }
}