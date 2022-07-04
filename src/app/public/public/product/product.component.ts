import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  @Input('img') img: string;
  @Input('name') ten: string;
  @Input('price') gia: number;
  @Input('width') width: string;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
