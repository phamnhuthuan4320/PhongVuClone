import { Component, OnInit } from '@angular/core';
import { addresses } from 'src/app/user/models/addresses.class';
import { AddressesService } from 'src/app/user/services/addresses.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  chooseCart: any[] = [];
  chooseValue: any[] = [];
  provisPrice: number = 0;
  totalPrice: number = 0;
  deliPrice: number = 10;
  discountPrice: number = 0;
  addresses: addresses;
  chooseAdd: number = 0;
  choosePM: number = 1;
  isLoading: boolean = true;
  
  constructor(private _addresses: AddressesService) { }

  ngOnInit(): void {
    this.chooseCart = JSON.parse(localStorage.getItem('chooseCart'));
    this.chooseValue = JSON.parse(localStorage.getItem('chooseValue'));

    for(let i=0; i<this.chooseCart.length; i++){
      this.provisPrice += this.chooseCart[i].data.price * this.chooseValue[i];
    }

    this.totalPrice += this.deliPrice + this.discountPrice + this.provisPrice;

    this._addresses.getAddresses().subscribe((data) => {
      this.addresses = data;

      this.isLoading = false;
    })
  }

  onChooseAdd(index: number){
    this.chooseAdd = index;
  }

  onChoosePM(index: number){
    this.choosePM = index;
  }
}
