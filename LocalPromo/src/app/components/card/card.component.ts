import { Component, OnInit } from '@angular/core';

export interface Photo {
  id: number;
  liked: boolean;
  description: string;
  comment_count: number;
  place: string;
  user: {
    id: number;
    name: string;
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() public photo: Photo;


  constructor() { }

  ngOnInit() {}

}
