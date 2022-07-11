import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { productDetail } from 'src/app/public/models/productDetail.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  prod: productDetail[];
  cartProds: any[] = [];
  isCartProdsEmpty: boolean;
  isShowConfirmErase: boolean = false;
  isShowConfirmDeleteAll: boolean = false;
  index: number;
  provisPrice: number;
  totalPrice: number = 0;
  totalCheck: boolean = false;
  prodCheck: boolean[] = [];
  isUncheckAll: boolean = true;
  isCheckAll: boolean = false;
  price: number;
  isHaveLoop: boolean = false;
  value: number[] = [];
  chooseCart: any[] = [];
  chooseValue: any[] = [];

  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log('start');
    window.scroll({ top: 0, behavior: "smooth" });

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));

    if (this.cartProds.length == 0) this.isCartProdsEmpty = false;
    else this.isCartProdsEmpty = true;

    this.onCheckProvisPrice();

    localStorage.removeItem('chooseCart');
    localStorage.removeItem('chooseValue');
  }

  onErase(index: number, price: number) {
    this.index = index;
    this.price = price;
    this.isShowConfirmErase = true;
  }

  onCancelErase() {
    this.isShowConfirmErase = false;
  }

  onYesErase(index: number, price: number) {
    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));
    this.chooseCart = JSON.parse(localStorage.getItem('chooseCart'));
    this.chooseValue = JSON.parse(localStorage.getItem('chooseValue'));

    if (this.prodCheck[index]) {
      this.chooseCart.splice(index, 1);
      this.chooseValue.splice(index, 1);

      localStorage.setItem('chooseCart', JSON.stringify(this.chooseCart));
      localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));
    }

    this.cartProds.splice(index, 1);
    this.value.splice(index, 1);

    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
    localStorage.setItem('value', JSON.stringify(this.value));

    if (this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;

    this.isShowConfirmErase = false;

    if (this.prodCheck[index]) this.totalPrice -= price;
    this.provisPrice = 0;

    this.prodCheck.splice(index, 1);

    this.onCheckProvisPrice();
  }

  onDeleteAll() {
    this.isShowConfirmDeleteAll = true;
  }

  onCancelDeleteAll() {
    this.isShowConfirmDeleteAll = false;
  }

  onYesDeleteAll() {
    localStorage.removeItem('cartProds');
    this.cartProds = [];
    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    localStorage.removeItem('value');
    this.value = [];
    localStorage.setItem('value', JSON.stringify(this.cartProds));

    localStorage.removeItem('chooseCart');
    this.chooseCart = [];

    localStorage.removeItem('chooseValue');
    this.chooseValue = [];

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));

    if (this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;

    this.isShowConfirmDeleteAll = false;
  }

  onCheckProvisPrice() {
    this.provisPrice = 0;
    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));

    for (let i = 0; i < this.cartProds.length; i++) {
      this.provisPrice += this.cartProds[i].data.price * this.value[i];
      this.prodCheck.push(false);
    }
  }

  onChooseProd(index: number, price: number) {
    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));

    if (this.prodCheck[index]) {
      this.chooseCart[index] = this.cartProds[index];
      localStorage.setItem('chooseCart', JSON.stringify(this.chooseCart));

      this.chooseValue[index] = this.value[index];
      localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));
    }
    else {
      this.chooseCart[index] = '';
      localStorage.setItem('chooseCart', JSON.stringify(this.chooseCart));

      this.chooseValue[index] = '';
      localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));
    }

    if (this.totalCheck) {

      this.isUncheckAll = true;
      for (let i = 0; i < this.prodCheck.length; i++) {
        if (this.prodCheck[i] == true) {
          this.isUncheckAll = false;
        }
      }

      if (this.prodCheck[index]) this.totalPrice += price * this.value[index];
      else this.totalPrice -= price * this.value[index];

      if (this.isUncheckAll) {
        this.totalCheck = false;
        this.totalPrice = 0;
      }
    }
    else {
      if (this.prodCheck[index]) this.totalPrice += price * this.value[index];
      else this.totalPrice -= price * this.value[index];

      this.isUncheckAll = true;
      for (let i = 0; i < this.prodCheck.length; i++) {
        if (this.prodCheck[i] == true) {
          this.isUncheckAll = false;
        }
      }

      this.isCheckAll = true;
      for (let i = 0; i < this.prodCheck.length; i++) {
        if (this.prodCheck[i] == false) {
          this.isCheckAll = false;
        }
      }

      if (this.isCheckAll == true) {
        this.totalCheck = true;
      }
    }
    // console.log('isCheckAll: ', this.isCheckAll);
    // console.log('totalCheck: ', this.totalCheck);
    // console.log('isUncheckAll: ', this.isUncheckAll);
    // console.log('prodCheck: ', this.prodCheck);
  }

  onChooseAll() {
    if (this.totalCheck) {
      this.chooseCart = JSON.parse(localStorage.getItem('cartProds'));
      localStorage.setItem('chooseCart', JSON.stringify(this.chooseCart));

      this.chooseValue = JSON.parse(localStorage.getItem('value'));
      localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));

      this.totalPrice = this.provisPrice;

      this.isUncheckAll = false;

      for (let i = 0; i < this.prodCheck.length; i++) {
        this.prodCheck[i] = true;
      }
    }
    else {
      this.chooseCart = [];
      localStorage.removeItem('chooseCart');

      this.chooseValue = [];
      localStorage.removeItem('chooseValue');

      this.totalPrice = 0;

      for (let i = 0; i < this.prodCheck.length; i++) {
        this.prodCheck[i] = false;
      }

      this.isUncheckAll = true;
    }
  }

  onContinue() {
    for (let i = 0; i < this.chooseCart.length; i++) {
      if (this.chooseCart[i] == '' || this.chooseCart[i] == null) {
        this.chooseCart.splice(i, 1);
        this.chooseValue.splice(i, 1);
        i--;
      }
    }

    localStorage.setItem('chooseCart', JSON.stringify(this.chooseCart));
    localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));

    this._router.navigate(['/user/checkout']);
  }

  onExceptAmount(index: number, price: number) {
    if (!localStorage.getItem('cartProds'))
      localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    if (!localStorage.getItem('value'))
      localStorage.setItem('value', JSON.stringify(this.value));

    if (this.value[index] > 1) if (this, this.prodCheck[index]) this.totalPrice -= price;

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));

    if (this.value[index] != 1) this.value[index]--;

    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
    localStorage.setItem('value', JSON.stringify(this.value));

    this.onCheckProvisPrice();

    if (this.prodCheck[index]) {
      this.chooseValue[index] = this.value[index];
      localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));
    }
  }

  onPlusAmount(index: number, price: number) {
    if (!localStorage.getItem('cartProds'))
      localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    if (!localStorage.getItem('value'))
      localStorage.setItem('value', JSON.stringify(this.value));

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    this.value = JSON.parse(localStorage.getItem('value'));

    if (this.prodCheck[index]) this.totalPrice += price;

    this.value[index]++;

    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));
    localStorage.setItem('value', JSON.stringify(this.value));

    this.onCheckProvisPrice();

    if (this.prodCheck[index]) {
      this.chooseValue[index] = this.value[index];
      localStorage.setItem('chooseValue', JSON.stringify(this.chooseValue));
    }
  }
}