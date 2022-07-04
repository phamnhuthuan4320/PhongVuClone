import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input('title') title: string;
  @Input('bigImg') bigImg: string;
  @Input('prods') prods: any;
  constructor() { }

  ngOnInit(): void {
  }

}
