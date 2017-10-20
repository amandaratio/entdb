import { Component, Input, OnInit } from '@angular/core';

import { Books } from '../books.component';

@Component({
  selector: 'dynamiclib',
  templateUrl: './dynamiclib.component.html',
  styleUrls: ['./dynamiclib.component.css'],
  providers: [Books],
})
export class DynamiclibComponent implements OnInit {
  @Input()
  library: object[] = [];
  ngOnInit() {

  }
}
