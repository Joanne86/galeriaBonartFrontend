import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RequestService } from './services/request.service';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from './services/repository.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { RoomComponent } from './components/room/room.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SaleComponent } from './components/sale/sale.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { FormArtistComponent } from './components/form-artist/form-artist.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SaleAdminComponent } from './components/sale-admin/sale-admin.component';

const routes: Routes = [
  {
    path: 'welcome', component: MenuComponent, children: [ // rutas hijas, se verán dentro del componente padre
      {
        path: 'artists',
        component: ArtistComponent
      },
      {
        path: 'rooms',
        component: RoomComponent
      },
      {
        path: 'sales',
        component: SaleComponent
      },
      {
        path: 'artworks',
        component: ArtworkComponent
      },
    ]
  },

  {
    path: 'welcome_admin', component: Menu2Component, children: [ // rutas hijas, se verán dentro del componente padre
      {
        path: 'artists_admin',
        component: FormArtistComponent
      },
      {
        path: 'customer_admin',
        component: CustomerComponent
      },
      {
        path: 'sale_admin',
        component: SaleAdminComponent
      },
    ]
  },
  { path: 'sesion', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RoomComponent,
    ArtistComponent,
    SaleComponent,
    ArtworkComponent,
    FormArtistComponent,
    Menu2Component,
    SaleAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [RepositoryService, RequestService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
