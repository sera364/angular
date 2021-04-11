import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/model/interfaces/icategory';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  category:ICategory[];
  catID:number;
  TotalInParent: number;
  // @ViewChild('hThree') elem: ElementRef;
  // @ViewChild('SelCat') elem2: ElementRef;
  constructor() {
    this.TotalInParent = 0;
    this.category = [
      { id: 1, name: "Mobiles" },
      { id: 2, name: "Labtops" },
      { id: 3, name: "cloths" }
    ];
   }
  //  ngAfterViewInit(): void {
  //   this.elem.nativeElement.style.color = "red";
  //   this.elem2.nativeElement.style.color = "orange";
  // }
  ngOnInit(): void {
  }
  TotalPriceInParent(total) {
   
    this.TotalInParent = total;

  }
}
