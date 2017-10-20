import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'book-profile',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  
})
export class DetailComponent implements OnInit {
  book: Books;
  
    constructor(
      private bookService: BookService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(params.get('title')))
      .subscribe(book => this.book = book);
  }
  
  goBack(): void {
    this.location.back();
  }

}
