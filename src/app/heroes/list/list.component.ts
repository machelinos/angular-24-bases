import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Thor', 'Captain America', 'Ironman', 'Black Widow'];
  public deletedHero: string = '';

  onClickDeleteLastHero(): void {
    this.deletedHero = this.heroNames.pop() || '';
  }
}
