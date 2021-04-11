import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/Api\'s/products/products.component';
// import { ProductsComponent } from "./component/Api's/products/products.component";

const routes: Routes = [
  // { path: 'product', component: ProductsComponent },
  // { path: 'product/:pid', component: ApiproductDetailsComponent },
  // { path: 'Newproduct', component: NewproductComponent },
  {path:"product",component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
