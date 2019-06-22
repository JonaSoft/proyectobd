import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../../servicios/data.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'




@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css']
})
export class ImportarComponent implements OnInit {

  constructor(private http:HttpClient,private dataCliente : DataService) {
    //let http:HttpClient;
    
   }

  ngOnInit() {
  }
  cargajson():void{
    console.log('LLamar archivo');
    this.http.get('../../assets/import.json')
    .subscribe(data=>{
      console.log(data);
      for(let item in data ){
        console.log(data[item]);
        this.dataCliente.addClientes(data[item]);
      }
    })

  }

}
