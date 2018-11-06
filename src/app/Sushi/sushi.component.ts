import { Component } from "@angular/core"

@Component(
    {
        selector: 'sushi-tag',
        templateUrl: './sushi.component.html',
        styleUrls: ['./sushi.component.css'],

    }
)
export class SushiComponent {
    titulo: string = "SOY EL SUSHI COMPONENT";
    sushiSelected = 0;
    nouIngredient="";
    sushi = {
        nombre: "",
        tipo: "",
        precio: "",
        vegano: "",
    };
    sushis = [{
        nombre: "niguiri de salmon",
        tipo: 'nigiri',
        precio: '2€',
        vegano: 'no',
        ingredients: ["arros, ", "aguacate, ", "salmon, ", "sal, "]
    },
    {
        nombre: "niguiri de atun",
        tipo: 'nigiri',
        precio: '2.5€',
        vegano: 'no',
        ingredients: ["arros, ", "wasabi, ", "atun, ", "algas, "]
    },
    {
        nombre: "'MAKI' c/o Virgil Abloh 2013",
        tipo: 'Maki',
        precio: '3.5€',
        vegano: 'yes',
        ingredients: ["arros, ", "wasabi, ", "aguacate, ", "quinoa, "]
    }

    ];
    borraSushi(index) {
        this.sushis.splice(index, 1);
    }

    addSushi() {
        this.sushis.push(JSON.parse(JSON.stringify(this.sushi)));
    }
    borraIngredient(index) {
        console.log("delete");
        //this.sushis[this.sushiSelected].ingredients.slice(index, 1);
        let sushiPerBorrar = this.sushis[this.sushiSelected];
        sushiPerBorrar.ingredients.splice(index,1);
    }
    addIngredient(){
        let sushiAfegir = this.sushis[this.sushiSelected];
        sushiAfegir.ingredients.push(this.nouIngredient);
    }
}