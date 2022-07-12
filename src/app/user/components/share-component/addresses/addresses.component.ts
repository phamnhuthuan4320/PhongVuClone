import { Component, OnInit } from '@angular/core';
import { address } from 'src/app/user/models/address.class';
import { addresses } from 'src/app/user/models/addresses.class';
import { AddressesService } from 'src/app/user/services/addresses.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  addresses: addresses;
  chooseAdd: number = 0;
  isLoading: boolean = true;
  isEditing: boolean = false;
  isAdding: boolean = false;
  chooseAddress: address;

  constructor(private _addresses: AddressesService) { }

  ngOnInit(): void {
    window.scroll({ top: 0, behavior: "smooth" });

    this._addresses.getAddresses().subscribe((data) => {
      this.addresses = data;

      this.isLoading = false;
    })
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

  onDeleteAddress(chooseAddress: address) {
    this._addresses.deleteAddress(chooseAddress).subscribe(data => {
      this.isLoading = true;

      this._addresses.getAddresses().subscribe((data) => {
        this.addresses = data;

        this.isLoading = false;
      })
    })
  }
}
