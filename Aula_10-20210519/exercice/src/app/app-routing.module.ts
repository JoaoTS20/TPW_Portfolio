import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AuthorsComponent} from "./authors/authors.component";
import {OverviewComponent} from "./overview/overview.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {PublishersComponent} from "./publishers/publishers.component";
import {BooksComponent} from "./books/books.component";
import {PublisherDetailsComponent} from "./publisher-details/publisher-details.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes =[
  {path: 'authors',component: AuthorsComponent},
  {path: 'publishers',component: PublishersComponent},
  {path: 'books',component: BooksComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'authordetails/:num',component: AuthorDetailsComponent},
  {path: 'publisherdetails/:num',component: PublisherDetailsComponent},
  {path: 'bookdetails/:num',component: BookDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
