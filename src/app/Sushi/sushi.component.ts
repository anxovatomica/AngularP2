import { Component } from "@angular/core"

@Component(
    { selector: 'sushi-tag',
    templateUrl: './sushi.component.html',
    styleUrls: ['./sushi.component.css'],
}
)
export class SushiComponent{
    titulo:string="SOY EL SUSHI COMPONENT";
    sushi={
        nombre:"",
        tipo:"",
        precio:"",
        vegano:""
    };
    sushis=[{
        nombre: "niguiri de salmon",
        tipo: 'nigiri',
        precio: '2€',
        vegano: 'no'
    },
    {
        nombre: "niguiri de atun",
        tipo: 'nigiri',
        precio: '2.5€',
        vegano: 'no'
    },
    {
        nombre: "'MAKI' c/o Virgil Abloh 2013",
        tipo: 'Maki',
        precio: '3.5€',
        vegano: 'yes'
    }

    ];
    borraSushi(index){
        this.sushis.splice(index, 1);
    }

    addSushi(){
        this.sushis.push(JSON.parse(JSON.stringify(this.sushi)));
    }
}