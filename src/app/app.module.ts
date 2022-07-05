import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from "swiper/angular";
import { NgxPaginationModule } from 'ngx-pagination';

import { ProdsNamePipe } from './public/pipes/prods-name.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { PublicComponent } from './public/public/public.component';
import { SliderComponent } from './public/public/slider/slider.component';
import { TabComponent } from './public/public/tab/tab.component';
import { ProductComponent } from './public/public/product/product.component';
import { ProdFrameComponent } from './public/public/prod-frame/prod-frame.component';
import { BannerComponent } from './public/public/banner/banner.component';
import { SquareComponent } from './public/public/square/square.component';
import { ProdPagiComponent } from './public/public/prod-pagi/prod-pagi.component';
import { PdBarComponent } from './share/pd-bar/pd-bar.component';
import { ProductDetailComponent } from './public/public/product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PublicComponent,
    SliderComponent,
    TabComponent,
    ProductComponent,
    ProdsNamePipe,
    ProdFrameComponent,
    BannerComponent,
    SquareComponent,
    ProdPagiComponent,
    PdBarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
