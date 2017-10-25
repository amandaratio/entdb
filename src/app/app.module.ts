import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './app.routes';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DynamiclibComponent } from './dynamiclib/dynamiclib.component';
import { LibraryComponent } from './library/library.component';
import { DetailComponent } from './detail/detail.component';
import { BookService } from './book.service';



// CUSTOM pipes
//import { SearchByPipe } from './pipes/search-by.pipe';
import { SrchFltrPipe } from './pipes/search-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoriesComponent,
    HomepageComponent,
    DynamiclibComponent,
    LibraryComponent,
    DetailComponent,
    SrchFltrPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NEEDS TO BE LAST
    RoutingModule
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
