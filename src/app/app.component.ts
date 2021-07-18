import { Component } from '@angular/core';
import { CARDS } from './todo-card/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = CARDS;
  cardsCount: number = 0;

  handleAdd() {
    this.cardsCount +=1;
  }

  handleDelete() {
    this.cardsCount -=1;
  }

  handleReset() {
    this.cardsCount -= this.cardsCount;
  }
};


