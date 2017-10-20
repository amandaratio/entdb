import { Component } from '@angular/core';

//get books 
import { Books } from '../books.component';
import { DynamiclibComponent } from '../dynamiclib/dynamiclib.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [Books],
})

export class HomepageComponent {
  public bookTitle: string;
  public bookAuthor: string;
  public bookSubject: string;
  showHide: false;
  public library:Array<Object>;

  constructor(_books: Books) {
    this.library = _books.getLib();
  }


}

