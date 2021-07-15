import { Injectable } from '@angular/core';
import { Flower, TypeFlower } from '../models/flower.model';

@Injectable({
    providedIn: 'root'
})
export class FlowersService {

    private _flowers: Flower[] = [
        {
            id: 1,
            type: TypeFlower.Rose,
            name: 'Rose Flower',
            image: 'https://d1qc61kr0n3aml.cloudfront.net/assets/img/experiment/WEB-1025/FQ4051_1.jpg?v=2020041162',
            price: 3000
        },
        {
            id: 2,
            type: TypeFlower.Yellow,
            name: 'Yellow Flower',
            image: 'https://d1qc61kr0n3aml.cloudfront.net/assets/img/experiment/WEB-1025/FQ112_1.jpg?v=2020041162',
            price: 4000
        },
        {
            id: 3,
            type: TypeFlower.Orange,
            name: 'Orange Flower',
            image: 'https://d1qc61kr0n3aml.cloudfront.net/assets/img/experiment/WEB-1025/FQ3013_1.jpg?v=2020041162',
            price: 5000
        },
    ];


    constructor() { }

    get flowers() {
        return this._flowers;
    }
}
