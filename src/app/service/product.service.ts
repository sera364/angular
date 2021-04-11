import { Injectable } from '@angular/core';
import { IProduct } from '../model/interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product:IProduct[];
  constructor() { 
    this.product=[{id:1,name:"svmsung",quantity:25,price:225,categoryID:1},
    {id:2,name:"nokia",quantity:40,price:300,categoryID:1},
    {id:3,name:"dell",quantity:30,price:1500,categoryID:2},
    {id:4,name:"hp",quantity:15,price:1800,categoryID:2},
    {id:5,name:"dress",quantity:78,price:800,categoryID:3},
    {id:6,name:"Jubes",quantity:0,price:800,categoryID:3}
  ]
  }
  getAllProducts():IProduct[]{
    return this.product;
  }
  getProductsByCatID(selectedCatID):IProduct[]{
    return this.product.filter((data)=>{
      return data.categoryID==selectedCatID;
    })
  }
  getProductByID(pid): IProduct {
    return this.product.find(data => data.id == pid);
  }
}
