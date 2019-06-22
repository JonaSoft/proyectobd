import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule} from  '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgDropFilesDirective} from './directives/ng-drop-files.directive';
import { HttpClientModule} from '@angular/common/http'

//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
import { DataService} from 'src/app/servicios/data.service';
import { CargaimagenService} from 'src/app/servicios/cargaimagen.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AddclienteComponent } from './components/addcliente/addcliente.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { LoginComponent } from './components/login/login.component';

import { ImportarComponent } from './components/importar/importar.component';

//import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    AddclienteComponent,
    ServicioComponent,
    LoginComponent,
    NgDropFilesDirective,
    ImportarComponent
  ],
  imports: [
    FormsModule,
    APP_ROUTING,
    ReactiveFormsModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [
    DataService,
    CargaimagenService,
    AngularFirestore
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
