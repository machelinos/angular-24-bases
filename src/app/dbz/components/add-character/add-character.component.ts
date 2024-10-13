import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  }

  @Output()
  public characterAdded = new EventEmitter<Character>();

  onClickAddCharacter() {
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.characterAdded.emit({...this.character});

    this.character = {
      name: '',
      power: 0
    }
    
  }
}
