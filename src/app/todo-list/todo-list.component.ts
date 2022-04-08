declare var M: any;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  inputValue: string = '';
  isLoading = false;

  addTodoItem() {
    this.todoService
      .createTodo(this.inputValue)
      .subscribe((hasTodoBeenCreated) => {
        if (hasTodoBeenCreated) {
          this.refreshTodos();
        } else {
          alert('Erreur serveur');
        }
      });
  }

  private refreshTodos() {
    this.isLoading = true;
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  notifyUserTodoUpdated(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe((hasTodoBeenUpdated) => {
      if (hasTodoBeenUpdated) {
        M.toast({ html: `La tache ${todo.label} a été mise à jour` });
        this.refreshTodos();
      } else {
        alert('Erreur serveur');
      }
    });
  }
  paramValue: string;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refreshTodos();
    this.paramValue = this.route.snapshot.paramMap.get('username');
  }
}
