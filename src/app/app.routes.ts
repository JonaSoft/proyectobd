import {RouterModule, Routes} from '@angular/router';
import {ClientesComponent} from './components/clientes/clientes.component';
import {ServicioComponent} from './components/servicio/servicio.component';
import {LoginComponent} from './components/login/login.component'

const APP_ROUTES: Routes = [

    {path:'inicio', component:ClientesComponent},
    {path:'servicio', component:ServicioComponent},
    {path:'login', component:LoginComponent},
    
    //{path:'', component:LoginComponent, canActivate: [AuthGuard]},
    //{path:'flight/:id', component:NotfoundComponent},

    {path:'**', pathMatch:'full', redirectTo:'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
