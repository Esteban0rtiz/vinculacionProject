import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NinosComponent } from './componentes/ninos/ninos.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
const routes: Routes = [
{path: 'navbar', component: NavbarComponent},
{path: 'niños', component: NinosComponent},
{path: 'actividades', component: ActividadesComponent},
{path: 'login', component: LoginComponent},
{path: 'usuarios', component: UsuariosComponent},
//{path:'',redirectTo: 'home', pathMatch:'full'},
// {path: '**', component:erro404}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
