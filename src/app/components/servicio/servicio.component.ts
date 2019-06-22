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
              private adicionakey:DataService,
              private _cargaImagenes:CargaimagenService,
              private afs: AngularFirestore) {

               this.itemsCollection = afs.collection<Item>('img');
               this.items = this.itemsCollection.valueChanges();
               //this.http.get
               }

               //public urllink=this.items[0].url;
  ngOnInit() {
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