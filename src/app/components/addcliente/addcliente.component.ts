import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../models/clienteinterface';
import { DataService } from '../../servicios/data.service';
//import { NgForm } from '@angular/forms';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.css']
})
export class AddclienteComponent implements OnInit {
  forma:FormGroup;
  constructor(public dataCliente : DataService) {
   // this.forma =new FormGroup({
   //   'ruc':new FormControl(''),
   //   'rsocial':new FormControl(''),
   //   'nombre':new FormControl('')
      
   // })
   }
  mostrarbuscar=false;
  mostrarficha=true;
  botonsave=false;
  botonnew=true;
  

  ngOnInit() {
  

   
  }
  cerrarFicha():void{
    this.mostrarbuscar=true;
    this.mostrarficha=false;
    console.log('this.mostrarficha',this.mostrarficha);
    console.log('this.mostrarbuscar',this.mostrarbuscar);
  }
  //saveCliente(clienteForm:any):void{
    //console.log(clienteForm.ruc)
   // this.dataCliente.addClientes(clienteForm);
 // }
  //updateFicha(clienteForm:any):void{
    //console.log(cliente)
    //this.dataCliente.updateClientes(clienteForm);
  //}
  saveCliente(clienteForm:any):void{
    console.log(clienteForm)
    if(clienteForm.uid == undefined){
      console.log(clienteForm.uid)
      
      this.dataCliente.addClientes(clienteForm);
    }else{
      
      
      this.dataCliente.updateClientes(clienteForm);  
    }
    this.mostrarbuscar=true;
    this.mostrarficha=false;  
   
  }
  nuevocliente(){
    this.botonnew=false;
    this.botonsave=true
  }
  
}
