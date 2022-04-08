import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CustomDatePipe } from './custom-date.pipe';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    CustomDatePipe,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
