import { Component, Input, OnInit } from '@angular/core';

import { Books } from '../books.component';
import { BookService } from '../book.service';

@Component({
  selector: 'dynamiclib',
  templateUrl: './dynamiclib.component.html',
  styleUrls: ['./dynamiclib.component.css'],
  providers: [Books],
})
export class DynamiclibComponent implements OnInit {
  @Input()
  books: Books[];

  constructor(
    private bookService: BookService){ }

  ngOnInit() {

  }

  // addBook(title: string, author: string, subject: string) {
  //   var newBook = {
  //       "title": title,
  //       "author": author,
  //       "subject": subject,
  //       "cover": "",
  //       "prev": ""
  //   };
  //   this.bookService.addBook(title, author, subject).subscribe(books=> {
  //       this.books.push(newBook);
  //   }   
  // }

}
