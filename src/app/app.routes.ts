import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import {UsuarioComponent} from './components/usuario/usuario.component'
import { USUARIO_ROUTES } from './components/usuario/usuarios.routes';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id', 
        component: UsuarioComponent,
        children:USUARIO_ROUTES
     },
    { path: '**',pathMatch:'full', redirectTo:'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
