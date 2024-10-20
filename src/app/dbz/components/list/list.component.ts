import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public characterDeleted = new EventEmitter<string>()

  onClickDeleteCharacter(id: string){
    this.characterDeleted.emit(id);
  }

}
