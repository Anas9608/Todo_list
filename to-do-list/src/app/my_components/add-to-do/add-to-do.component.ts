import { Component, Output , EventEmitter } from '@angular/core';
import { Todo } from '../../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})


export class AddToDoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  desc : string = '';
  title : string = '';

  onSubmit(){
    if (this.title.trim() === '' || this.desc.trim() === '') {
      // Handle the case where fields are empty
      return; // Prevent further execution if fields are empty
    }
    const todo = new Todo(1,this.title, this.desc,true);
    
    this.todoAdd.emit(todo);
  }
}
