import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books: Books[] = [];

  constructor(
    private router: Router,
    private bookService: BookService){ }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books)
  }
  
  ngOnInit(): void {
    this.getBooks();
  }

}
