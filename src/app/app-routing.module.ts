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
  { path: 'add-note/:permitId', loadChildren: './add-note/add-note.module#AddNotePageModule' },
  { path: 'search-by-user', loadChildren: './search-by-user/search-by-user.module#SearchByUserPageModule' },
  { path: 'search-by-vehicle', loadChildren: './search-by-vehicle/search-by-vehicle.module#SearchByVehiclePageModule' },
  { path: 'single-pic', loadChildren: './camera-preview/single-pic/single-pic.module#SinglePicPageModule' },
  { path: 'multiple-pics', loadChildren: './camera-preview/multiple-pics/multiple-pics.module#MultiplePicsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
