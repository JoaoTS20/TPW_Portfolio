import { Component, OnInit } from '@angular/core';
import {AuthorsComponent} from "../authors/authors.component";
import {Author} from "../author";
import {AUTHORS} from "../authorslist";
import {Publisher} from "../publisher";
import {Book} from "../book";
import {BOOKS} from "../bookslist";
import {PUBLISHERS} from "../publisherslist";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  authors: Author[] | undefined;
  publishers: Publisher[];
  books: Book[];
  constructor(private authorService: AuthorService) {
    this.books =BOOKS.slice(0,4);
    this.publishers=PUBLISHERS.slice(0,4)
  }

  ngOnInit(): void {
    this.getAuthors()
  }
  getAuthors(): void{
    this.authorService.getAuthorsN(4).subscribe(authors => this.authors = authors);
  }

}
