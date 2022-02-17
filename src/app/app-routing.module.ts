import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksAddComponent } from './components/books-add/books-add.component';
import { BooksEditComponent } from './components/books-edit/books-edit.component';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path: "books", component: BooksComponent},
  {path: "books/add", component: BooksAddComponent},
  {path: "books/edit/:id", component: BooksEditComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
