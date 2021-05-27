import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../author";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AUTHORS} from "../authorslist";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

 @Input() author: Author | undefined;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id).subscribe(author => this.author = author);
  }
  update(): void{
    // @ts-ignore
    this.authorService.updateAuthor(this.author).subscribe(() =>this.goBack());
  }
  delete(): void{
    // @ts-ignore
    this.authorService.deleteAuthor(this.author).subscribe(() =>this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}
