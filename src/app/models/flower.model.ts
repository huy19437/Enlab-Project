export interface Flower {
    id: number;
    type: TypeFlower;
    name: string;
    image: string;
    price: number;
}


export enum TypeFlower {
    Rose,
    Yellow,
    Orange,
}