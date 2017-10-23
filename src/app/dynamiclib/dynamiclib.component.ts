import { Component, OnInit } from '@angular/core';

import { Books } from '../books.component';
@Component({
  selector: 'dynamiclib',
  templateUrl: './dynamiclib.component.html',
  styleUrls: ['./dynamiclib.component.css'],
  providers: [Books],
})
export class DynamiclibComponent implements OnInit {
  public library:Array<Object>;

  constructor(_books: Books) {
    this.library = _books.getLib();
  }

  ngOnInit() {
  }

}
