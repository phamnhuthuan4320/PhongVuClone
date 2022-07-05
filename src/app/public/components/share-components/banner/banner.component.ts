import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input('grid') grid: string;
  @Input('gap') gap: string;
  @Input('img') img: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
