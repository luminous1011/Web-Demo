import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent)  },
  { path: 'home',loadChildren: () => import('./home/home.component').then(m => m.HomeComponent
    ) },
  { path: 'product', loadChildren: () => import('./product/product.component').then(m => m.ProductComponent) },
  { path: 'meeting', loadChildren: () => import('./meeting/meeting.component').then(m => m.MeetingComponent) },
  { path: 'news', loadChildren: () => import('./news/news.component').then(m => m.NewsComponent) },
  { path: 'personl', loadChildren: () => import('./persnol/persnol.component').then(m => m.PersnolComponent) },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
