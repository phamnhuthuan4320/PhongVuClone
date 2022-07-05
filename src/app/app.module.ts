import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
  import { HttpClientModule } from '@angular/common/http';
  import { SwiperModule } from "swiper/angular";
  import { NgxPaginationModule } from 'ngx-pagination';

//Pipes
import { ProdsNamePipe } from './public/pipes/prods-name.pipe';

//Components
import { AppComponent } from './app.component';
  //share
  import { HeaderComponent } from './share/header/header.component';
  import { FooterComponent } from './share/footer/footer.component';
  //public
  import { PublicComponent } from './public/components/public/public.component';
  import { ProductDetailComponent } from './public/components/share-components/product-detail/product-detail.component';
    import { SliderComponent } from './public/components/share-components/slider/slider.component';
    import { TabComponent } from './public/components/share-components/tab/tab.component';
    import { ProductComponent } from './public/components/share-components/product/product.component';
    import { ProdFrameComponent } from './public/components/share-components/prod-frame/prod-frame.component';
    import { BannerComponent } from './public/components/share-components/banner/banner.component';
    import { SquareComponent } from './public/components/share-components/square/square.component';
    import { ProdPagiComponent } from './public/components/share-components/prod-pagi/prod-pagi.component';
    import { PdBarComponent } from './share/pd-bar/pd-bar.component';
  //user
  import { UserComponent } from './user/components/user/user.component';
    import { LoginComponent } from './user/components/share-component/login/login.component';
import { CartComponent } from './user/components/share-component/cart/cart.component';
import { OrderComponent } from './user/components/share-component/order/order.component';

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
        ProductDetailComponent,
      UserComponent,
        LoginComponent,
        CartComponent,
        OrderComponent
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
