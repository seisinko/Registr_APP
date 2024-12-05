import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Si no se encuentra un path, se redirige a 'home'
    pathMatch: 'full'  // Asegura que se redirija solo si la ruta está completamente vacía
  },
  {
    path: 'home',  // Ruta para el home
    loadChildren: () => import('./users/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'login',  // Ruta para login
    loadChildren: () => import('./users/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register',  // Ruta para registro
    loadChildren: () => import('./users/register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: '**',  // Ruta comodín para cualquier ruta no definida, redirige al home
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
