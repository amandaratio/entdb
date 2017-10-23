import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { BookService } from '../book.service';

import { DynamiclibComponent } from '../dynamiclib/dynamiclib.component';
import { DetailComponent } from '../detail/detail.component';

const BOOKS: Books[] =[
  {title:"Sample1", author:"Author1", subject:"", cover:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_1.jpg", prev:""},
  {title:"Sample2", author:"Author2", subject:"", cover:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_1.jpg", prev:""},
  {title:"Sample3", author:"Author3", subject:"", cover:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_1.jpg", prev:""},
  {title:"Sample4", author:"Author4", subject:"", cover:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_1.jpg", prev:""},
  {title:"Sample5", author:"Author5", subject:"", cover:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_1.jpg", prev:""},
  {title:"Sample6", author:"Author6", subject:"", cover:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_1.jpg", prev:""}
];


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
  public library:Array<Object>;

  books: Books[] = [];
  selectedBook: Books;

  constructor(
    private router: Router,
    private bookService: BookService){ }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books)
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

}

