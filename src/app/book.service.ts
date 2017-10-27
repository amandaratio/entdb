import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Books } from './books.component';
import { BOOKS } from './mock-lib';

@Injectable()
export class BookService {
    books: Books[];


    constructor() { }

    getBooks(): Promise<Books[]> {
        return Promise.resolve(BOOKS);
    }

    getBook(title: string): Promise<Books> {
        return this.getBooks()
                   .then(books => books.find(book => book.title === title));
    }

    addBook(newBook: object): void {
         //this.books.push(newBook);
    }
}