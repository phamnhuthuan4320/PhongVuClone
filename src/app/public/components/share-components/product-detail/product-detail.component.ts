import { Component, OnInit } from '@angular/core';
import { productDetail } from 'src/app/public/models/productDetail.class';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../models/products.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  prod: productDetail;
  cateName: string = 'For you';
  prods: products;
  isCheck: string = 'Unchecked';
  backColor: string = 'rgb(253, 230, 230)';
  border: string = '1px solid blue';

  constructor(private _pro: ProductsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._pro.getProducts().subscribe((data) => {
      this.prods = data;
    })

    this._activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
    })

    this._pro.getProductsDetail(this.id).subscribe((data) => {
      this.prod = data;
    })
  }

  onChangePromoDiv() {
    if(this.isCheck=='Unchecked'){
      this.isCheck = 'Apply';
      this.backColor = 'white';
      this.border = '1px solid gray';
    } 
    else {
      this.isCheck = 'Unchecked';
      this.backColor = 'rgb(253, 230, 230)';
      this.border = '1px solid blue';
    } 
  }

}