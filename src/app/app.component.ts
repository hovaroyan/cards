import { Component } from '@angular/core';
import { CARDS } from './todo-card/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = CARDS
}
