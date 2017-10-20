import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'categories',
        component: CategoriesComponent,
    },
    {
        path: 'library',
        component: LibraryComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class RoutingModule {}