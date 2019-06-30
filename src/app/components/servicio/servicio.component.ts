import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../servicios/data.service';
import {CargaimagenService} from '../../servicios/cargaimagen.service';
//import { Dato } from "../../interface/data.interface";
import { ClienteInterface } from '../../models/clienteinterface';
import { FileItem } from "../../models/file-item";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import { subscribeOn } from 'rxjs/operators';
import { map } from 'rxjs-compat/operator/map';

export interface Item{nombre:string;url:string;}

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
   datos=[];
   flightExport=[];
   estaSobreElemento=false;
   archivos: FileItem[] = [];
   private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
   //flightnodo:string;
  constructor(private router:Router,
              //public http:HttpClient,
              private _dataService1:DataService,
              public _DataFicha: DataService,
              private adicionakey:DataService,
              private _cargaImagenes:CargaimagenService,
              private afs: AngularFirestore,
              private http:HttpClient,
              private dataCliente : DataService) {

               this.itemsCollection = afs.collection<Item>('img');
               this.items = this.itemsCollection.valueChanges();
               //this.http.get
               }
   mostrarservicio=true;
   mostrarfichaadd:boolean=false;
   mostrarimportar:boolean=true;
   mostrartablaimportar=false;
   ir=true;
   close=false;
   irImportar=true;
   closeImportar=false;
   public nuevos:any=[]

               //public urllink=this.items[0].url;
  ngOnInit() {
  }
   
  newFicha(){
   //console.log(dataId)
   //this.mostrarservicio=true;
   this.mostrarfichaadd=!(this.mostrarfichaadd);
   this.ir=false;
   this.close=true;
   //this.irImportar=false;
   //this.closeImportar=true;

   //console.log(this.mostrarservicio);
   console.log(this.mostrarfichaadd);
   this._DataFicha.selectedCliente = ({});
   //this._DataFicha.newFicha(this.mostrarfichaadd=true);

  
 }
 closeFicha(){
   this.close=false;
   this.ir=true;
   this.mostrarfichaadd=false
 }
 closeTabla(){
   this.closeImportar=false;
   this.irImportar=true;
   this.mostrartablaimportar=false
 }
 cargajson(){
   console.log('LLamar archivo');
   if(this.irImportar=true){
      this.irImportar=false;
      this.closeImportar=true;
      this.http.get('../../../assets/import.json')
      .subscribe(data=>{
         console.log(data);
         for(let item in data ){
            //console.log(data[item]);
            setTimeout(() => {
               this.nuevos=this.dataCliente.addClientes(data[item])
               .map(res=>(console.log(res),
               this.nuevos=res))
               
            }, 2000);
            this.mostrartablaimportar=true;
            //console.log(data[item])
            //this.nuevos=data[item]
            console.log(this.nuevos)
         }
      })
   } 
   if(this.irImportar=false){
         console.log('cerrar importar')
         this.mostrartablaimportar=false;
         this.irImportar=true;
         this.closeImportar=false
               
   }
   
 }

  
   cargarImagenes(){
     this._cargaImagenes.cargarImagenesFirebase(this.archivos);
     console.log(this.items)
     //console.log("si lee")
   }
   limpiarContenido(){
      this.archivos = []
   }
   pruebaSobreElemento(event){
      console.log(event);
      console.log(this.items);
   }
   buscaUrl(){
      let http:HttpClient;
      http.get('../../assets/import.json')
      .subscribe(data=>{
         console.log(data)
      })


   }
  }