import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AUTHORS} from "../authorslist";
import {BOOKS} from "../bookslist";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book |undefined;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(): void {
    // @ts-ignore
    const num = +this.route.snapshot.paramMap.get('num');
    this.book = BOOKS.find(book => book.num ===num);
  }
  goBack(): void{
    this.location.back();
  }

}
