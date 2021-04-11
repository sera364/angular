import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/classes/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pInfo1:Products;
  pInfo2:Products;
  pInfo3:Products;
  pInfo4:Products;
  pInfo5:Products;
  pInfo6:Products;
  discount1:boolean;
  discount2:boolean;
  discount3:boolean;
  discount4:boolean;
  discount5:boolean;
  discount6:boolean;

  constructor() {
    // this.discount1 = false;
    // this.discount2 = false;
    // this.discount3 = false;
    // this.discount4 = false;
    // this.discount5 = false;
    // this.discount6 = false;

    // this.pInfo1 = new Products(1, "dress1", "https://dummyimage.com/300x300/fa0dfa/ffffff&text=Dress+1",
    // ["short", "blue", "classic"],"clothes", "sara",true);

    // this.pInfo2 = new Products(1, "dress2", "https://dummyimage.com/300x300/fa0dfa/ffffff&text=Dress+2",
    // ["long", "black", "wedding"],"clothes", "sara",true);

    // this.pInfo3 = new Products(1, "dress3", "https://dummyimage.com/300x300/fa0dfa/ffffff&text=Dress+3",
    // ["short", "yellow", "nature"],"clothes", "sara",true);
    
    // this.pInfo4 = new Products(1, "dress4", "https://dummyimage.com/300x300/fa0dfa/ffffff&text=Dress+4",
    // ["short", "yellow", "nature"],"clothes", "sara",true);
    
    // this.pInfo5 = new Products(1, "dress5", "https://dummyimage.com/300x300/fa0dfa/ffffff&text=Dress+5",
    // ["short", "yellow", "nature"],"clothes", "sara",true);
    
    // this.pInfo6 = new Products(1, "dress6", "https://dummyimage.com/300x300/fa0dfa/ffffff&text=Dress+6",
    // ["short", "yellow", "nature"],"clothes", "sara",true);
   }

  ngOnInit(): void {
  }
  Features1(){
    this.discount1 = !this.discount1;
  }
  
  Features2(){
    this.discount2 = !this.discount2;
  }
  
  Features3(){
    this.discount3 = !this.discount3;
  }
  Features4(){
    this.discount4 = !this.discount4;
  }
  Features5(){
    this.discount5 = !this.discount5;
  }
  Features6(){
    this.discount6 = !this.discount6;
  }
}
