import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  tache: Todo;

  @Output()
  todoUpdatedEvent = new EventEmitter<Todo>();

  edition = false;

  constructor() {}

  ngOnInit() {}

  todoUpdated() {
    this.edition = false;
    this.todoUpdatedEvent.emit(this.tache);
  }
}
