import { Component, OnInit, Input } from '@angular/core';
import { products } from '../../../models/products.class';

@Component({
  selector: 'app-prod-frame',
  templateUrl: './prod-frame.component.html',
  styleUrls: ['./prod-frame.component.scss']
})
export class ProdFrameComponent implements OnInit {

  @Input('prods') prods: products;
  @Input('cateName') cateName: string;
  @Input('width') width: string;
  @Input('backImg') backImg: string;
  @Input('watchColor') watchColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
