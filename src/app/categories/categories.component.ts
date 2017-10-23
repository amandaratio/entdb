import { Component, Input, OnInit } from '@angular/core';

import { Books } from '../books';
import { BookService } from '../book.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [BookService],
})
export class CategoriesComponent implements OnInit {

  books: Books[] = [];
  selectedBook: Books;

  constructor(
    private bookService: BookService
  ){ }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books)
  }
  
  ngOnInit(): void {
    this.getBooks();
  }

}
