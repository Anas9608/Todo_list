import { Component, Inject,PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Todo } from '../../todo';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { AddToDoComponent } from "../add-to-do/add-to-do.component";


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, ToDoItemComponent, AddToDoComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  todos: Todo[] = [];
  localItem : any;
  // this.todos;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos");
      this.todos = this.localItem ? JSON.parse(this.localItem) : [];
    }
    // if (this.localStorageItem === null) {
    //   this.todos = [];
    // } else {
    //   this.todos = JSON.parse(this.localStorageItem);
    // }

  }

  ngOnInit(): void {

  }

  handleDeleteToDo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log(this.todos);
  };
  
  handleTodoStrikeOff(todo: Todo){
    
   let idx  = this.todos.indexOf(todo);
    this.todos[idx].isActive = !this.todos[idx].isActive;
    console.log("bottom", todo);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

};
