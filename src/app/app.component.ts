import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bookTitle: string;
  public bookAuthor: string;
  public bookSubject: string;
  showHide: false;
  public books:Array<Object> =[
    {title:"Sample1", author:"Author1", subject:"", cover:""},
    {title:"Sample2", author:"Author2", subject:"", cover:""},
    {title:"Sample3", author:"Author3", subject:"", cover:""},
    {title:"Sample4", author:"Author4", subject:"", cover:""},
    {title:"Sample5", author:"Author5", subject:"", cover:""},
    {title:"Sample6", author:"Author6", subject:"", cover:""}
  ];

  title = 'Digital Book Shelf';

  addBook(): void {
    var newBook = {
      title:"",
      author:"",
      subject:""
    }
    newBook.title = this.bookTitle;
    newBook.author = this.bookAuthor;
    newBook.subject = this.bookSubject;

    this.books.push(newBook);

  }



}