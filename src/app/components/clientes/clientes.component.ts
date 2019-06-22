import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../models/clienteinterface';
import { DataService } from '../../servicios/data.service';
//import { NgForm } from '@angular/forms';
//import { ConsoleReporter } from 'jasmine';
//import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import { strictEqual } from 'assert';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public _DataService: DataService,
              public _DataFicha: DataService,
              //public http:HttpClient
              ) {
 
  }
  mostrarbuscar=true;
  mostrarficha=false;
  //botonsave=false;
  //botonnew=false;
  public clientes = [];
  public dataFinal=[];
  public cliente='';
  public ficha:ClienteInterface;
  ngOnInit() {
    this._DataService.enviarData().subscribe(clientes => {
     // console.log(clientes);
      this.clientes=clientes;
      console.log(this.clientes.length) 

    })
  }
  getFicha(dataId:string, cliente:ClienteInterface) : void{
    let idcliente=dataId;
    console.log(idcliente)
    console.log(cliente)
    //this._DataFicha.getOneCliente(idcliente).subscribe(ficha =>{
      //console.log(ficha);
      //this.mostrarbuscar=false;
      //this.mostrarficha=true;

    //})
  //console.log(idcliente)
  this._DataFicha.selectedCliente = Object.assign({},cliente);
   this.mostrarbuscar=false;
   this.mostrarficha=true;
  }



  deleteCliente(idcliente:string,rsocial:string){
    
    const confirmar= confirm('ESTAS SEGURO(A)?... No podrás recuperar al cliente '+ rsocial ); 
    if (confirmar){
      //console.log('borrado', idcliente, rsocial);
      this._DataFicha.deleteClientes(idcliente);
    }
  }
  newFicha(dataId:string,cliente:ClienteInterface):void{
    console.log(dataId)
    this.mostrarbuscar=false;
    this.mostrarficha=true;
    
    this._DataFicha.selectedCliente = ({});
    this._DataFicha.newFicha(dataId,cliente);

   
  }
  buscaRuc(event:any):void{
    this.dataFinal=[];
    let valor = event.target.value;  
    console.log(valor);
    this._DataService.solicitaData(valor).subscribe(data=>{
      for(let z in data){
        console.log(data[z].ruc)
        if (((data[z].ruc).toString()).includes(valor)){
          this.dataFinal.push(data[z])
          //console.log(data.ruc);
          console.log( this.dataFinal);
          this.clientes=this.dataFinal.sort();
          //this.dataFinal=[];
        }
        if (valor==data[z].ruc){
          this.dataFinal=[];  
          this.dataFinal.push(data[z]);
          this.clientes=this.dataFinal.sort();
        
        }
       
      }
      console.log(data);
      this.dataFinal=[]
    })
  }
  buscaRuc1(event:any){
    //this.clientes=[];
    this.dataFinal=[];
    let valor = event.target.value;  
    console.log(valor);
    //his._DataService.solicitaData(valor).subscribe(data=>{
    let data=[];
    data=this.clientes
    if(valor.length>3){
      for(let z in data){
          console.log(data[z].ruc)
        
          if (((data[z].ruc).toString()).includes(valor)){
            this.dataFinal.push(data[z])
            //console.log(data.ruc);
            //console.log( this.dataFinal);
            this.clientes=this.dataFinal.reverse();
            //this.dataFinal=[];
          }
          if (valor==data[z].ruc){
            this.dataFinal=[];  
            this.dataFinal.push(data[z]);
            this.clientes=this.dataFinal.reverse();
          
          }
      }
    }
      //console.log(data);
      this.dataFinal=[]
    //})
  }
  buscaRsocial(valor:string){
    //this.clientes=[];
    this.dataFinal=[];
    //valor = event.target.value;  
    console.log(valor);
    //this._DataService.solicitaData(valor).subscribe(data=>{
    let data=[];  
    //console.log(data)
    data=this.clientes;
    if(valor.length>4){
      valor=valor.toUpperCase();
      for(let z in data){
        //this.dataFinal=[]
        console.log(data[z].rsocial)
        if ((data[z].rsocial).includes(valor)){
          this.dataFinal.push(data[z])
          //console.log(data.ruc);
          console.log( this.dataFinal);
          this.clientes=this.dataFinal.reverse();
          //this.dataFinal=[];
        }
        if (valor==data[z].rsocial){
          this.dataFinal=[];  
          this.dataFinal.push(data[z]);
          this.clientes=this.dataFinal.reverse();
          //this.dataFinal=[];
        }
      }
    }
      console.log(data);
      //this.dataFinal=[]
      //this.clientes=this.dataFinal;
    //})
  }
  buscaStatus(valor?:any){
    
    //let valor:null = event.target.value;  
    console.log(valor);
    this._DataService.solicitaData().subscribe(data=>{
      for(let aproach in data){
        if(data[aproach].status=="Aproach"){
            this.dataFinal.push(data[aproach]);
            this.clientes=this.dataFinal.sort();
        }
      }
    })
  }
  buscaStatus1(valor?:any){
    this.clientes=[];
    this.dataFinal=[];
    //let valor:null = event.target.value;  
    console.log(valor);
    this._DataService.solicitaData().subscribe(data=>{
      for(let item in data){
        if(data[item].status==valor){
            this.dataFinal.push(data[item]);
            this.clientes=this.dataFinal.sort();
        }
      }
    })
  }
  buscaResponsable(valor?:any){
    this.clientes=[];
    this.dataFinal=[];
    //let valor:null = event.target.value;  
    console.log(valor);
    this._DataService.solicitaData().subscribe(data=>{
      for(let item in data){
        if(data[item].status==valor){
            this.dataFinal.push(data[item]);
            this.clientes=this.dataFinal.sort();
        }
      }
    })
  }
}




