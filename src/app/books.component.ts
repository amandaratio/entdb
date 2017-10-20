import { Component } from '@angular/core';


import { Injectable } from '@angular/core';

@Injectable()
export class Books  {
    public bookTitle: string;
    public bookAuthor: string;
    public bookSubject: string;
    books:Array<Object>;

    constructor() {
        this.books = [
        {title:"Sample1", author:"Author1", subject:"", cover:"", prev:""},
        {title:"Sample2", author:"Author2", subject:"", cover:"", prev:""},
        {title:"Sample3", author:"Author3", subject:"", cover:"", prev:""},
        {title:"Sample4", author:"Author4", subject:"", cover:"", prev:""},
        {title:"Sample5", author:"Author5", subject:"", cover:"", prev:""},
        {title:"Sample6", author:"Author6", subject:"", cover:"", prev:""}
      ];
    }

    addBook(title, author, sub) {
        var newBook = {
          title:"",
          author:"",
          subject:""
        }
        newBook.title = title;
        newBook.author = author;
        this.books.push(newBook);
        return this.books;
      }
    
      getLib() {
        return this.books;
      }

}