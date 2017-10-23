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

// CUSTOM pipes
//import { SearchByPipe } from './pipes/search-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoriesComponent,
    HomepageComponent,
    DynamiclibComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NEEDS TO BE LAST
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
