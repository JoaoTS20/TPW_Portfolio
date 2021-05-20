import {Component, Input, OnInit} from '@angular/core';
import {Publisher} from "../publisher";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AUTHORS} from "../authorslist";
import {PUBLISHERS} from "../publisherslist";

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit {
  @Input() publisher: Publisher |undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPublisher();
  }
  getPublisher(): void {
    // @ts-ignore
    const num = +this.route.snapshot.paramMap.get('num');
    this.publisher = PUBLISHERS.find(publisher => publisher.num ===num);
  }
  goBack(): void{
    this.location.back();
  }

}
