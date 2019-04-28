import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';
import { RequestService } from './services/request.service';
import { HomeComponent } from './components/home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';

const routes: Routes = [
  { path: 'welcome', component: MenuComponent, children: [ // rutas hijas, se verán dentro del componente padre
    {
      path: 'gestion', // la ruta real es movimientos/nuevo
      component: GestionComponent
    },
    {
      path: 'add',
      component: FormComponent
    }
  ] },
  
  { path: 'sesion', component: LoginComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    HomeComponent,
    GestionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, RequestService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
