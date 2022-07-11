import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './user/services/guard/login.guard';
import { SignupGuard } from './user/services/guard/signup.guard';

import { PublicComponent } from './public/components/public/public.component';
import { ProductDetailComponent } from './public/components/share-components/product-detail/product-detail.component';
import { UserComponent } from './user/components/user/user.component';
import { LoginComponent } from './user/components/share-component/login/login.component';
import { PageComponent } from './user/components/share-component/login/page/page.component';
import { SignupComponent } from './user/components/share-component/login/signup/signup.component';
import { CartComponent } from './user/components/share-component/cart/cart.component';
import { CheckoutComponent } from './user/components/share-component/checkout/checkout.component';
import { OrderComponent } from './user/components/share-component/order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full'
  },
  {
    path: 'public',
    children: [
      {
        path: '',
        component: PublicComponent,
      },
      {
        path: 'productDetail/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'login',
        canActivate: [SignupGuard],
        children: [
          {
            path: '',
            component: LoginComponent,
          },
          {
            path: 'page',
            component: PageComponent
          },
          {
            path: 'signup',
            component: SignupComponent
          }
        ]
      },
      {
        path: 'cart',
        canActivate: [LoginGuard],
        component: CartComponent
      },
      {
        path: 'order',
        canActivate: [LoginGuard],
        component: OrderComponent
      },
      {
        path: 'checkout',
        canActivate: [LoginGuard],
        component: CheckoutComponent
      }
    ]
  },
  {
    path: '**',
    component: PublicComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
