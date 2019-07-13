import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../servicios/data.service';
//import { Dato } from "../../interface/data.interface";
import { FileItem } from "../../models/file-item";
import { CargaimagenService } from '../../servicios/cargaimagen.service'

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css']
})
export class ImportarComponent implements OnInit {
  datos=[];
  flightExport=[];
  estaSobreElemento=false;
  archivos: FileItem[] = [];

  constructor(private router:Router,
              private http:HttpClient,
              private _dataService1:DataService,
              private adicionakey:DataService,
              private _cargaImagenes:CargaimagenService) { }

  ngOnInit() {
  }

  cargarImagenes(){
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
    //console.log("si lee")
  }
  limpiarContenido(){
     this.archivos = []
  }
  pruebaSobreElemento(event){
     console.log(event);
  }
}
