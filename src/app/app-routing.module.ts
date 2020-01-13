import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuardService] },
  { path: 'permit-detail/:id', loadChildren: './permit-detail/permit-detail.module#PermitDetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'property-list', loadChildren: './property-list/property-list.module#PropertyListPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'no-permit-result', loadChildren: './no-permit-result/no-permit-result.module#NoPermitResultPageModule' },
  { path: 'view-notes/:permitId', loadChildren: './view-notes/view-notes.module#ViewNotesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
