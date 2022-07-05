import { Component, OnInit, Input } from '@angular/core';
import { products } from '../../models/products.class';
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  choose: boolean = true;
  @Input('prods') prods: products; 
  @Input('width') width: string; 

  constructor() { }

  ngOnInit(): void {}

  onChoose(isChoose: string){
    if(isChoose == 'true') this.choose = true;
    else  this.choose = false
  }
}
