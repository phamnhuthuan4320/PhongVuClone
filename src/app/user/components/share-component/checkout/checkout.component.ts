import { Component, OnInit } from '@angular/core';
import { address } from 'src/app/user/models/address.class';
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
  isEditing: boolean = false;
  isAdding: boolean = false;
  chooseAddress: address;
  
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

  onChooseAddress(index: number){
    this.chooseAdd = index;
  }

  onChoosePM(index: number){
    this.choosePM = index;
  }

  onChooseEdit(address: any) {
    this.chooseAddress = address;

    this.isEditing = true;
  }

  onUpdate() {
    this.isLoading = true;

    this._addresses.putAddress(this.chooseAddress).subscribe(data => {
      this._addresses.getAddresses().subscribe((data) => {
        this.addresses = data;
      })

      this.isEditing = false;

      this.isLoading = false;

      window.scroll({ top: 0, behavior: "smooth" });
    })
  }

  onCancelEdit() {
    this.isLoading = true;
    
    this._addresses.getAddresses().subscribe((data) => {
      this.addresses = data;

      this.isLoading = false;
    })
    this.isEditing = false;

    window.scroll({ top: 0, behavior: "smooth" });
  }

  onChooseAdd() {
    this.chooseAddress = new address('', '', '', '', '1 Ward', '1 District', 'Hanoi City', '', null, null, false, '', '', '', 0, '', '');

    this.isAdding = true;
  }

  onAdd() {
    let addAddress = {
      'fullName': this.chooseAddress.fullName,
      'phone': this.chooseAddress.phone,
      'country': this.chooseAddress.country,
      'city': this.chooseAddress.city,
      'district': this.chooseAddress.district,
      'ward': this.chooseAddress.ward,
      'address': this.chooseAddress.address,
      'isDefault': this.chooseAddress.isDefault,
      'latitude': this.chooseAddress.latitude,
      'longitude': this.chooseAddress.longitude,
    }

    this.isLoading = true;

    this._addresses.postAddress(addAddress).subscribe(data => {
      this._addresses.getAddresses().subscribe((data) => {
        this.addresses = data;
      })

      this.isAdding = false;

      this.isLoading = false;

      window.scroll({ top: 0, behavior: "smooth" });
    })
  }

  onCancelAdd() {
    this.isAdding = false;

    window.scroll({ top: 0, behavior: "smooth" });
  }
}
