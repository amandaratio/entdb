import { Injectable } from '@angular/core';
import { Books } from './books.component';
import { BOOKS } from './mock-lib';

@Injectable()
export class BookService {
    getBooks(): Promise<Books[]> {
        return Promise.resolve(BOOKS);
    }
    getBook(title: string): Promise<Books> {
        return this.getBooks()
                   .then(books => books.find(book => book.title === title));
    }
}