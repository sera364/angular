import { Component, OnInit } from '@angular/core';
import { IPro } from 'src/app/model/interfaces/ipro';
import { ProductService } from 'src/app/service/API/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:IPro[];
  constructor(private _ApiPrdServ: ProductService) {
    this.products = [ 
      {
        id:1,
        name:"toy",
        price:200,
        quantity:2
      }
    ]
   }

  ngOnInit(): void {
    // this._ApiPrdServ.getAllProducts().subscribe((data) => {
    //   this.products = data;

    // }, (err) => {
    //   console.log(err);

    // })
  }


}
