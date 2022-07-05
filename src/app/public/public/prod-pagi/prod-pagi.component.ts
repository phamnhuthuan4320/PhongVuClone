import { Component, OnInit, Input } from '@angular/core';
import { products } from '../../models/products.class';

@Component({
  selector: 'app-prod-pagi',
  templateUrl: './prod-pagi.component.html',
  styleUrls: ['./prod-pagi.component.scss']
})
export class ProdPagiComponent implements OnInit {

  @Input('prods') prods: products;
  @Input('cateName') cateName: string;
  @Input('width') width: string;

  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
