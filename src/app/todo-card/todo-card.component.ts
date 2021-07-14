import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  card = {
    title: 'traveling',
    description: 'travel to Canada',
    dueDate: 'september 8th',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
