import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgxStripeModule } from 'ngx-stripe';
import { ShareModule } from './share/share.module';

//Pipes
import { ProdsNamePipe } from './public/pipes/prods-name.pipe';

//Services


//Components
import { AppComponent } from './app.component';
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
//user
import { UserComponent } from './user/components/user/user.component';
import { CartComponent } from './user/components/share-component/cart/cart.component';
import { OrderComponent } from './user/components/share-component/order/order.component';
import { LoginComponent } from './user/components/share-component/login/login.component';
import { PageComponent } from './user/components/share-component/login/page/page.component';
import { SignupComponent } from './user/components/share-component/login/signup/signup.component';
import { CheckoutComponent } from './user/components/share-component/checkout/checkout.component';
import { AddressesComponent } from './user/components/share-component/addresses/addresses.component';
import { StripeComponent } from './user/components/share-component/stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SliderComponent,
    TabComponent,
    ProductComponent,
    ProdsNamePipe,
    ProdFrameComponent,
    BannerComponent,
    SquareComponent,
    ProdPagiComponent,
    ProductDetailComponent,
    UserComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
    PageComponent,
    SignupComponent,
    CheckoutComponent,
    AddressesComponent,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxStripeModule.forRoot('pk_test_51KxEc0JsyzcmxeMthvDJvy8lLHbDXIU3uggTgPC4oXvUDwL1DNt7srJwYKzzJyG7NLDv9MjprFy7DZPgoHxieMaS00tFsI8FNI'),
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
