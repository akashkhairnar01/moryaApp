import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'user-login',
    loadChildren: () => import('./pages/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
