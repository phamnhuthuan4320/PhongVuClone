import { Component, OnInit } from '@angular/core';
import { productDetail } from 'src/app/public/models/productDetail.class';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  prod: productDetail;
  cateName: string = 'For you';
  isCheck: string = 'Unchecked';
  backColor: string = 'rgb(253, 230, 230)';
  border: string = '1px solid blue';
  cartProds: any[] = [];
  isAdded: boolean = false;
  isLoading: boolean = true;
  isHaveLoop: boolean = false;
  value: number[] = [];

  constructor(private _pro: ProductsService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    window.scroll({ top: 0, behavior: "smooth" });

    this._activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
    })

    this._pro.getProductsDetail(this.id).subscribe((data) => {
      this.prod = data;

      this.isLoading = false;
    })

  }

  onChangePromoDiv() {
    if (this.isCheck == 'Unchecked') {
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

  onBuynow() {
    if (!localStorage.getItem('cartProds'))
      localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    if (!localStorage.getItem('value'))
      localStorage.setItem('value', JSON.stringify(this.value));

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));

    for (let i = 0; i < this.cartProds.length; i++) {
      if (this.prod.data._id == this.cartProds[i].data._id) {
        this.value[i]++;
        this.isHaveLoop = true;
      }
    }

    if (this.isHaveLoop) {
      localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
      localStorage.setItem('value', JSON.stringify(this.value));
    }
    else {
      this.cartProds.push(this.prod);
      this.value.push(1);
      localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
      localStorage.setItem('value', JSON.stringify(this.value));
    }


    this._router.navigate(['/user/cart']);
  }

  onAdd() {
    if (localStorage.getItem('loginToken')) {
      if (!localStorage.getItem('cartProds'))
        localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

      if (!localStorage.getItem('value'))
        localStorage.setItem('value', JSON.stringify(this.value));

      this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
      this.value = JSON.parse(localStorage.getItem('value'));

      for (let i = 0; i < this.cartProds.length; i++) {
        if (this.prod.data._id == this.cartProds[i].data._id) {

          this.value[i]++;
          
          this.isHaveLoop = true;
        }
      }

      if (this.isHaveLoop) {
        localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
        localStorage.setItem('value', JSON.stringify(this.value));
      }
      else {
        this.cartProds.push(this.prod);
        this.value.push(1);
        localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
        localStorage.setItem('value', JSON.stringify(this.value));
      }

      this.isAdded = true;
      setTimeout(() => {
        this.isAdded = false;
      }, 3000);
    }
    else {
      this._router.navigate(['/user/login']);
    }
  }

}
