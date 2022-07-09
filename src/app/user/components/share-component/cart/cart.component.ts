import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { productDetail } from 'src/app/public/models/productDetail.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  prods: productDetail[];
  cartProds: any[] = [];
  isCartProdsEmpty: boolean;
  isShowConfirmErase: boolean = false;
  isShowConfirmDeleteAll: boolean = false;
  index: number;
  provisPrice: number = 0;
  totalPrice: number = 0;
  totalCheck: boolean;
  prodCheck: boolean[] = [];
  isUncheckAll: boolean = true;
  isCheckAll: boolean = false;
  price: number;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    window.scroll({top: 0, behavior: "smooth"});

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));

    if(this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;

    this.onCheckProvisPrice();
  }

  onErase(index: number, price: number){
    this.index = index;
    this.price = price;
    this.isShowConfirmErase = true;
  }

  onCancelErase(){
    this.isShowConfirmErase = false;
  }

  onYesErase(index: number, price: number){
    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));

    this.cartProds.splice(index,1);

    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    if(this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;

    this.isShowConfirmErase = false;

    if(this.prodCheck[index]) this.totalPrice -= price;
    this.provisPrice = 0;
    this.prodCheck.splice(index,1);
    this.onCheckProvisPrice();
  }

  onDeleteAll(){
    this.isShowConfirmDeleteAll = true;
  }

  onCancelDeleteAll(){
    this.isShowConfirmDeleteAll = false;
  }

  onYesDeleteAll(){
    localStorage.removeItem('cartProds');
    this.cartProds = [];
    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    
    if(this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;

    this.isShowConfirmDeleteAll = false;
  }

  onCheckProvisPrice(){
    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));

    for(let i=0; i<this.cartProds.length; i++){
      this.provisPrice += this.cartProds[i].data.price;
      this.prodCheck.push(false);
    }
  }

  onChooseProd(index: number, price: number){
    if(this.totalCheck){
      this.isUncheckAll = true;
      for(let i=0; i<this.prodCheck.length; i++){
        if(this.prodCheck[i] == true){
          this.isUncheckAll = false;
        }
      }

      if(this.prodCheck[index]) this.totalPrice += price;
      else this.totalPrice -= price;

      if(this.isUncheckAll){
        this.totalCheck = false;
        this.totalPrice = 0;
      }
    }
    else{
      if(this.prodCheck[index]) this.totalPrice += price;
      else this.totalPrice -= price;

      this.isUncheckAll = true;
      for(let i=0; i<this.prodCheck.length; i++){
        if(this.prodCheck[i] == true){
          this.isUncheckAll = false;
        }
      }

      this.isCheckAll = true;
      for(let i=0; i<this.prodCheck.length; i++){
        if(this.prodCheck[i] == false){
          this.isCheckAll = false;
        }
      }

      if(this.isCheckAll == true){
        this.totalCheck = true;
      }

    }
  }

  onChooseAll(){
    if(this.totalCheck){
      this.totalPrice = this.provisPrice;

      this.isUncheckAll = false;
      for(let i=0; i<this.prodCheck.length; i++){
        this.prodCheck[i] = true;
      }
    }
    else{
      this.totalPrice = 0;

      for(let i=0; i<this.prodCheck.length; i++){
        this.prodCheck[i] = false;
      }

      this.isUncheckAll = true;
    }
  }

  onContinue(){
    this._router.navigate(['/user/checkout']);
  }

}