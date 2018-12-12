import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoPermitResultPage } from './no-permit-result.page';

const routes: Routes = [
  {
    path: '',
    component: NoPermitResultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoPermitResultPage]
})
export class NoPermitResultPageModule {}
