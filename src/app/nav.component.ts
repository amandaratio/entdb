import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    styleUrls: ['./app.component.css'],
    template: `
    <div style="text-align:center">
      <h1>
      {{title}}
      </h1> 
    </div>
    <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" routerLink="/home" routerLinkActive="active">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/categories" routerLinkActive="active">Categories</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/library" routerLinkActive="active">Library</a>
    </li>
    </ul>
    `
  })

  export class NavComponent {
    componentName: 'NavComponent'
    title = 'Digital Bookshelf';
  }