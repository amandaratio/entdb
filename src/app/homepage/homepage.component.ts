import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { BookService } from '../book.service';

import { DynamiclibComponent } from '../dynamiclib/dynamiclib.component';
import { DetailComponent } from '../detail/detail.component';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [BookService],
})

export class HomepageComponent {
  public bookTitle: string;
  public bookAuthor: string;
  public bookSubject: string;
  showHide: false;

  books: Books[] = [];
  selectedBook: Books;

  constructor(
    private router: Router,
    private bookService: BookService){ }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books.slice(1,5))
  }

  addBook(title: string, author: string, subject: string): void {
    var newBook = {
      "title": title,
      "author": author,
      "subject": subject,
      "cover": "",
      "prev": ""
   };
    this.bookService.addBook(newBook);
  }
  
  ngOnInit(): void {
    this.getBooks();
  }

  onSelected(book: Books): void {
    this.selectedBook = book;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBook.title]);
  }

  mouseover:boolean;

}

