import { Component } from '@angular/core';

//get books 
import { Books } from './books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Books],
})

export class AppComponent {
  

}

