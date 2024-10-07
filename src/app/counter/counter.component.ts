import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public counter: number = 10;

    onIncreaseClick(value: number) {
      this.counter += value;
    } 
  
    onResetClick(): void {
      this.counter = 10;
    }
}