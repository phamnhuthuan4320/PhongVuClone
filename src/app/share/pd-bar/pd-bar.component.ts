import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pd-bar',
  templateUrl: './pd-bar.component.html',
  styleUrls: ['./pd-bar.component.scss']
})
export class PdBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToTop(){
    window.scroll({top: 0, behavior: "smooth"});
  }

}
