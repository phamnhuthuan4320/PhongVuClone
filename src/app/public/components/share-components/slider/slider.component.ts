import { Component, OnInit } from '@angular/core';
import { categories } from '../../../models/categories.class';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  cates: categories;
  cateName: string;
  slides = [
    { img: "https://lh3.googleusercontent.com/eWokBRRjuQnKtVHCzxW9QxkGnq9FoFUR0ANvvOq_VTyuZp7OOlWOnvW20dMGCp6nIYlwlD_ZTlqbc8C7UXPnG9UrNlJf3qgI=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/arq-dix0L8E1YMTNNrMcj2nLedOPsX2zNT89mkNOGUgE8df2KpxHYYyEGdeoBZDh7x6gXwQV_Bl-SYKeXsRk8z0RfzibqPJx=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/2H6mknu-TkrchbBNRKGukLyczizvyuBdex0uedGMT4qQlJED0CT6RcO5c6v3S80dQDx0rXwJNEor0zhV4ZieYt3vPrv7ops=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/-ZeSCBhY3VbBAty5E7BdDd_R-j7kmEmb2rhNV8JGTnNJqgfX4Z_3DTxesLi8OmOtogcdauseEZ1Cx-zkgEqrmLW401bxnHlykQ=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/wsoP5A2VI7JQ1oki6RE0eau0G37O1429X0V_7WoqSACi4MxTH_flzMCgxZRU6YRdh_Gt9bmNIbu4xwZJw32TuygtyQp4QJvl=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/rKcIif0TzQI7MxcRowTmCuu6bTqFAo6ty5Ax1uR2qoZH3JUUJpcrhpk_DxwxRMypqPfhpWIFwF1VhmqVyT3rg0YjK_pxrdCs=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/fXt5CiQGRNOA7piXJQq4jz5_4COtAZHQeVrPMYijJmnHv82_Gxwbz6VzMthHlzPU4A3wwuNhzjepZpdBKZyOYReza0KyIRed=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/HJGSp9KCWALWkt-_MkRGimeDcu0Q7bi3DNrpKYQYGE7J3tYh0vZBX2XZgz9B0-ZhzFAS4ut4p1qvY5OcPans7npYhtbTZtSxiw=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/El1P7mNVvWZwQ-TR1aGeYIHqyG4alZP5DPL73tf2i_GDla0VaXOCu5BHK_j04uRc8SyfWo7NBB3SiF_dUd2MSLtL024IzIY=rw-w1920" },
    { img: "https://lh3.googleusercontent.com/BBtDusJxkM8GKxoFe1WjHsQaFkiumLV-QTug7bQycPvWPUhCTNJBbiIpJrTtupDg1Bpl6AIpZy4UFIstoBDR21WCACobCS4=rw-w1920" }
  ];
  index: number = 0;
  time: any;

  constructor(private _cate: CategoriesService) { }

  ngOnInit(): void {
    this._cate.getCategories().subscribe((data) => {
      this.cates = data;
    })

    this.time = setInterval(()=>{
      this.index++;
      if(this.index==this.slides.length){
        this.index = 0;
      }
    },5000);
  }

  getCateName(cateName: string){
    this.cateName = cateName;
  }

  chooseSlide(i: number){
    this.index = i;

    clearInterval(this.time);
    this.time = setInterval(()=>{
      this.index++;
      if(this.index==this.slides.length){
        this.index = 0;
      }
    },5000);
  }

  plusSlide(i: number){
    this.index = this.index + +i;
    if(this.index==this.slides.length){
      this.index = 0;
    }

    if(this.index<0){
      this.index = this.slides.length-1;
    }
    
    clearInterval(this.time);
    this.time = setInterval(()=>{
      this.index++;
      if(this.index==this.slides.length){
        this.index = 0;
      }
    },5000);
  }
}
