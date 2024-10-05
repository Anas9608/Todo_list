import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ToDoListComponent } from './my_components/to-do-list/to-do-list.component';
import { AddToDoComponent } from './my_components/add-to-do/add-to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent,AddToDoComponent,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'this is my heading';
  constructor(){
    // setTimeout(() => {
    //   this.title = 'and the heading has changes'
    // }, 5000);
  }
}
