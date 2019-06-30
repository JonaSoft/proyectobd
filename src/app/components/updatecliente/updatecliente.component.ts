import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ClienteInterface } from '../../models/clienteinterface';
import { DataService } from '../../servicios/data.service';
//import { NgForm } from '@angular/forms';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-updatecliente',
  templateUrl: './updatecliente.component.html',
  styleUrls: ['./updatecliente.component.css']
})
export class UpdateclienteComponent implements OnInit {
  forma:FormGroup;
  constructor(public dataCliente : DataService,
              public router: Router) {}
    mostrarficha:boolean;
    //mostrarbuscar:boolean=false;
  

  ngOnInit() {
    this.mostrarficha=true;
  }
  cerrarFicha():void{
    //this.mostrarficha=false;
    this.router.navigate(['/inicio']);
    //this.mostrarbuscar=true;
    //this.mostrarservicio

  }
  saveCliente(clienteForm:any):void{
    console.log(clienteForm)
    if(clienteForm.uid == undefined){
      console.log(clienteForm.uid)
      
      this.dataCliente.addClientes(clienteForm);
     
    }else{
      
      
      this.dataCliente.updateClientes(clienteForm);  
    }
    //this.mostrarficha=false;
    //this.mostrarbuscar=true;
    this.router.navigate(['/inicio'])  
   
  }

}
