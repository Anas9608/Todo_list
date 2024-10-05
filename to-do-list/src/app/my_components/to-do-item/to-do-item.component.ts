import { Component,Input,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
 @Input()
  todo!: Todo;

  @Output() deleteToDo : EventEmitter<Todo> = new EventEmitter();
  @Output() strikeOffTodo : EventEmitter<Todo> = new EventEmitter();

onClick(todo: Todo){
  this.deleteToDo.emit(todo)
};

onCheckBoxClick(todo:Todo){
  console.log("consumed",todo);
  this.strikeOffTodo.emit(todo)
}

}
