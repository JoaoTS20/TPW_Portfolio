import { Component, OnInit } from '@angular/core';
import {AuthorsComponent} from "../authors/authors.component";
import {Author} from "../author";
import {AUTHORS} from "../authorslist";
import {Publisher} from "../publisher";
import {Book} from "../book";
import {BOOKS} from "../bookslist";
import {PUBLISHERS} from "../publisherslist";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  authors: Author[];
  publishers: Publisher[];
  books: Book[];
  constructor() {
    this.authors = AUTHORS.slice(0,4);
    this.books =BOOKS.slice(0,4);
    this.publishers=PUBLISHERS.slice(0,4)
  }

  ngOnInit(): void {
  }

}
