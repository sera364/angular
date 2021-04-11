import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { ProductsComponent } from './component/products/products.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { ChildComponent } from './component/orders/child/child/child.component';
import { ParentComponent } from './component/orders/parent/parent/parent.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MainComponent,
    ProductsComponent,
    FooterComponent,
    SliderComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
