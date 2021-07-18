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
  addDisable: boolean = false;
  deleteDisable: boolean = false;
  resetDisable: boolean = false;


  handleAdd() {
    this.cardsCount +=1;
    this.deleteDisable = true;
    this.resetDisable = true;
    if(this.cardsCount === 10) {
      this.addDisable = true;
    }
    console.log(this.cardsCount);
  }

  handleDelete() {
    this.cardsCount -=1;
    if(this.cardsCount <=0) {
      this.deleteDisable = false;
    } 
    console.log(this.cardsCount);
  }

  handleReset() {
    this.cardsCount -= this.cardsCount;
    if(this.cardsCount <=0) {
      this.resetDisable = false;
    }
    console.log(this.cardsCount);
  }
};


