
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class Books  {
    //public bookTitle: string;
    //public bookAuthor: string;
    //public bookSubject: string;

    title: string;
    author: string;
    subject: string;
    cover: string;
    prev: string; 
    
      /*getLib() {
          var lib = [
          {title:"Sample1", author:"Author1", subject:"", cover:"", prev:""},
          {title:"Sample2", author:"Author2", subject:"", cover:"", prev:""},
          {title:"Sample3", author:"Author3", subject:"", cover:"", prev:""},
          {title:"Sample4", author:"Author4", subject:"", cover:"", prev:""},
          {title:"Sample5", author:"Author5", subject:"", cover:"", prev:""},
          {title:"Sample6", author:"Author6", subject:"", cover:"", prev:""}
        ];
        return lib;
      }*/

}