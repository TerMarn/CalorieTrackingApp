export class Ingredient{

    name: string;
    category: string;
    manufacturer: string;
    kcals: number;
    proteins: number;
    fats: number;
    carbohydrates: number;

    constructor(name:string, category:string, manufacturer:string, kcals:number, proteins:number, fats:number, carbohydrates:number){
        this.name = name;
        this.category = category;
        this.manufacturer = manufacturer;
        this.kcals = kcals;
        this.proteins = proteins;
        this.fats = fats;
        this.carbohydrates = carbohydrates;
    }
}
