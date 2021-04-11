import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/model/interfaces/iproduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  product:IProduct[];
  total:number;
  @Input() selectedCatID: number;
  @Output() TotalPriceChangedEvent: EventEmitter<number>;
  constructor(private _prdServ:ProductService) {
    this.TotalPriceChangedEvent = new EventEmitter<number>();
    this.total = 0;
    this.product = this._prdServ.getAllProducts();

   }

  ngOnInit(): void {
  }
  getProductsByCatID(): IProduct[] {
    return this._prdServ.getProductsByCatID(this.selectedCatID);
  }

  TotalPrice(price, count) {
    this.total += price * count;
    this.TotalPriceChangedEvent.emit(this.total);
    console.log(this.total);

  }

}
