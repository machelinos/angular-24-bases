import { Component, EventEmitter, Output } from '@angular/core';

import {v4 as uuid} from "uuid";

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  @Output()
  public characterAdded = new EventEmitter<Character>();

  onClickAddCharacter() {

    if(this.character.name.length === 0) return;

    this.character = {...this.character, id: uuid()}

    this.characterAdded.emit({...this.character});

    this.character = {
      id: '',
      name: '',
      power: 0
    }
    
  }
}
