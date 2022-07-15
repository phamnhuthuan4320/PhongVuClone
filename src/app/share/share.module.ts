import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { PdBarComponent } from './pd-bar/pd-bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PdBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PdBarComponent
  ]
})
export class ShareModule { }
