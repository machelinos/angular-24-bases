import { Injectable } from "@angular/core";

import { v4 as uuid } from "uuid";

import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 12000
        }
    ];

    addCharacter(character: Character){
        this.characters.push(character);
    }

    deleteCharacter(id: string){
        this.characters =  this.characters.filter(character=>character.id !== id)
    }

}