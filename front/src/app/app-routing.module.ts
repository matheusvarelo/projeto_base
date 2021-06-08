import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormularioComponent } from './pages/usuarios/usuario-formulario/usuario-formulario.component';
import { UsuarioListaComponent } from './pages/usuarios/usuario-lista/usuario-lista.component';


const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full', canActivate: [] },
  { path: 'usuarios', component: UsuarioListaComponent, canActivate: [] },
  { path: 'usuarios/formulario', component: UsuarioFormularioComponent, canActivate: [] },
  { path: 'usuarios/formulario/:id', component: UsuarioFormularioComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
