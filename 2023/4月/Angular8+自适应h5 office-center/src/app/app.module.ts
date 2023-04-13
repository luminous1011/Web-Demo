import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MeetingComponent } from './meeting/meeting.component';
import { NewsComponent } from './news/news.component';
import { PersnolComponent } from './persnol/persnol.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { Routes, RouterModule } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomeComponent
     },
  { path: 'product', component: ProductComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: 'news', component: NewsComponent },
  { path: 'personl', component: PersnolComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    MeetingComponent,
    NewsComponent,
    PersnolComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NzButtonModule,
    NzCheckboxModule,
    AppRoutingModule,
    NzMenuModule,
    IconsProviderModule
    ,NzCarouselModule,
    NzDrawerModule,
    NzPaginationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }