import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display: boolean = true;
  width: string = '140%';  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.width == '140%')  this.width = '130%';
      else  this.width = '140%';
    },5000)
  }

  onClose(){
    this.display = false;
  }

}
