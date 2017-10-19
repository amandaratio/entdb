import { Component } from '@angular/core';

//get books 
import { Books } from './books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Books]
})

export class AppComponent {
  public bookTitle: string;
  public bookAuthor: string;
  public bookSubject: string;
  showHide: false;
  public library:Array<Object>;
  
  title = 'Digital Book Shelf';

  constructor(_books: Books) {
    this.library = _books.getLib();
  }

  add(title, author, sub) {
    var newBook = {
      title:"",
      author:"",
      subject:""
    }
    newBook.title = title;
    newBook.author = author;
    this.library.push(newBook);
  }

}

