import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    window.scroll({top: 0, behavior: "smooth"});

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));

    if(this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;
  }

  onErase(id: string){
    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));

    for (let i=0; i<this.cartProds.length; i++){
      if(id == this.cartProds[i].data._id)
        this.cartProds.splice(i,1);
    }

    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    if(this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;
  }

  onDeleteAll(){
    localStorage.removeItem('cartProds');
    this.cartProds = [];
    localStorage.setItem('cartProds', JSON.stringify(this.cartProds));

    this.cartProds = JSON.parse(localStorage.getItem('cartProds'));
    
    if(this.cartProds.length == 0) this.isCartProdsEmpty = false
    else this.isCartProdsEmpty = true;
  }
}
