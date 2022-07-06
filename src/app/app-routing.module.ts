import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public/components/public/public.component';
import { ProductDetailComponent } from './public/components/share-components/product-detail/product-detail.component';
import { UserComponent } from './user/components/user/user.component';
import { LoginComponent } from './user/components/share-component/login/login.component';
import { CartComponent } from './user/components/share-component/cart/cart.component';
import { OrderComponent } from './user/components/share-component/order/order.component';
import { PageComponent } from './user/components/share-component/login/page/page.component';
import { SignupComponent } from './user/components/share-component/login/signup/signup.component';

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
        component: CartComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
