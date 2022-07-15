import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { address } from 'src/app/user/models/address.class';
import { addresses } from 'src/app/user/models/addresses.class';
import { listPM } from 'src/app/user/models/listPM.class';
import { AddressesService } from 'src/app/user/services/addresses.service';
import { OrderService } from 'src/app/user/services/order.service';
import { PaymentService } from 'src/app/user/services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  chooseCart: any[] = [];
  chooseValue: any[] = [];
  cartProds: any[] = [];
  value: any[] = [];
  provisPrice: number = 0;
  totalPrice: number = 0;
  deliPrice: number = 10;
  discountPrice: number = 0;
  addresses: addresses;
  chooseAdd: number = 0;
  choosePM: number = 0;
  isLoading: boolean = false;
  isEditing: boolean = false;
  isAdding: boolean = false;
  chooseAddress: address;
  listPM: listPM;
  orderInfo: any;
  chooseCartOrder: any[] = [];
  isChooseAddPM: boolean = false;

  constructor(private _router: Router, private _addresses: AddressesService, private _payment: PaymentService, private _order: OrderService) { }

  ngOnInit(): void {
    window.scroll({ top: 0, behavior: "smooth" });

    this.chooseCart = JSON.parse(localStorage.getItem('chooseCart'));
    this.chooseValue = JSON.parse(localStorage.getItem('chooseValue'));

    for (let i = 0; i < this.chooseCart.length; i++) {
      this.provisPrice += this.chooseCart[i].data.price * this.chooseValue[i];
    }

    this.totalPrice += this.deliPrice + this.discountPrice + this.provisPrice;

    this.isLoading = true;

    this._addresses.getAddresses().subscribe((data) => {
      this.addresses = data;

      this._payment.getListPM().subscribe(data => {
        this.listPM = data;

        for (let i = 0; i < this.chooseCart.length; i++) {
          this.chooseCartOrder.push({
            "productId": this.chooseCart[i].data._id,
            "quantity": this.chooseValue[i]
          });
        }

        this.orderInfo = {
          "items": this.chooseCartOrder,
          "address": {
            "fullName": this.addresses.data[0].fullName,
            "phone": this.addresses.data[0].phone,
            "address": this.addresses.data[0].address,
            "ward": this.addresses.data[0].ward,
            "district": this.addresses.data[0].district,
            "city": this.addresses.data[0].city,
            "country": this.addresses.data[0].country,
            "latitude": this.addresses.data[0].latitude,
            "longitude": this.addresses.data[0].longitude,
            "isDefault": this.addresses.data[0].isDefault,
            "fullAddress": this.addresses.data[0].fullAddress
          },
          "paymentMethodId": this.listPM.data[0].id,
          "notes": ""
        }

        this.isLoading = false;
      })
    })
  }

  onChooseAddress(index: number) {
    this.chooseAdd = index;

    this.orderInfo = {
      "items": this.chooseCartOrder,
      "address": {
        "fullName": this.addresses.data[this.chooseAdd].fullName,
        "phone": this.addresses.data[this.chooseAdd].phone,
        "address": this.addresses.data[this.chooseAdd].address,
        "ward": this.addresses.data[this.chooseAdd].ward,
        "district": this.addresses.data[this.chooseAdd].district,
        "city": this.addresses.data[this.chooseAdd].city,
        "country": this.addresses.data[this.chooseAdd].country,
        "latitude": this.addresses.data[this.chooseAdd].latitude,
        "longitude": this.addresses.data[this.chooseAdd].longitude,
        "isDefault": this.addresses.data[this.chooseAdd].isDefault,
        "fullAddress": this.addresses.data[this.chooseAdd].fullAddress
      },
      "paymentMethodId": this.listPM.data[this.choosePM].id,
      "notes": ""
    }
  }

  onChoosePM(index: number) {
    this.choosePM = index;

    this.orderInfo = {
      "items": this.chooseCartOrder,
      "address": {
        "fullName": this.addresses.data[this.chooseAdd].fullName,
        "phone": this.addresses.data[this.chooseAdd].phone,
        "address": this.addresses.data[this.chooseAdd].address,
        "ward": this.addresses.data[this.chooseAdd].ward,
        "district": this.addresses.data[this.chooseAdd].district,
        "city": this.addresses.data[this.chooseAdd].city,
        "country": this.addresses.data[this.chooseAdd].country,
        "latitude": this.addresses.data[this.chooseAdd].latitude,
        "longitude": this.addresses.data[this.chooseAdd].longitude,
        "isDefault": this.addresses.data[this.chooseAdd].isDefault,
        "fullAddress": this.addresses.data[this.chooseAdd].fullAddress
      },
      "paymentMethodId": this.listPM.data[this.choosePM].id,
      "notes": ""
    }
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

        this.orderInfo = {
          "items": this.chooseCartOrder,
          "address": {
            "fullName": this.addresses.data[0].fullName,
            "phone": this.addresses.data[0].phone,
            "address": this.addresses.data[0].address,
            "ward": this.addresses.data[0].ward,
            "district": this.addresses.data[0].district,
            "city": this.addresses.data[0].city,
            "country": this.addresses.data[0].country,
            "latitude": this.addresses.data[0].latitude,
            "longitude": this.addresses.data[0].longitude,
            "isDefault": this.addresses.data[0].isDefault,
            "fullAddress": this.addresses.data[0].fullAddress
          },
          "paymentMethodId": this.listPM.data[0].id,
          "notes": ""
        }

        this.isEditing = false;

        this.isLoading = false;
      })

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

  onPay() {
    this.isLoading = true;

    this._order.postOrder(this.orderInfo).subscribe(data => {
      this._router.navigate(['']);

      localStorage.removeItem('chooseCart');
      localStorage.removeItem('chooseValue');

      this.isLoading = false;
    })
  }

  onChooseAddPM() {
    this.isChooseAddPM = true;
    console.log(this.isLoading)
  }

  onFinishAddPM() {
    window.scroll({ top: 0, behavior: "smooth" });

    this.isLoading = true;

    this._payment.getListPM().subscribe(data => {
      this.listPM = data;

      this.orderInfo = {
        "items": this.chooseCartOrder,
        "address": {
          "fullName": this.addresses.data[0].fullName,
          "phone": this.addresses.data[0].phone,
          "address": this.addresses.data[0].address,
          "ward": this.addresses.data[0].ward,
          "district": this.addresses.data[0].district,
          "city": this.addresses.data[0].city,
          "country": this.addresses.data[0].country,
          "latitude": this.addresses.data[0].latitude,
          "longitude": this.addresses.data[0].longitude,
          "isDefault": this.addresses.data[0].isDefault,
          "fullAddress": this.addresses.data[0].fullAddress
        },
        "paymentMethodId": this.listPM.data[0].id,
        "notes": ""
      }

      this.isLoading = false;
    })

    this.isChooseAddPM = false;
  }

  onRemove(id: string) {
    this.isLoading = true;
    this._payment.deletePM(id).subscribe(data => {
      this._payment.getListPM().subscribe(data => {
        this.listPM = data;

        this.orderInfo = {
          "items": this.chooseCartOrder,
          "address": {
            "fullName": this.addresses.data[0].fullName,
            "phone": this.addresses.data[0].phone,
            "address": this.addresses.data[0].address,
            "ward": this.addresses.data[0].ward,
            "district": this.addresses.data[0].district,
            "city": this.addresses.data[0].city,
            "country": this.addresses.data[0].country,
            "latitude": this.addresses.data[0].latitude,
            "longitude": this.addresses.data[0].longitude,
            "isDefault": this.addresses.data[0].isDefault,
            "fullAddress": this.addresses.data[0].fullAddress
          },
          "paymentMethodId": this.listPM.data[0].id,
          "notes": ""
        }

        this.isLoading = false;
      })
    })
  }
}