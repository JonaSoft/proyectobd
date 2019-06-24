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
        setTimeout(() => {
          this.dataCliente.addClientes(data[item]);  
        }, 2000);
        
      }
    })

  }
  handleFileSelect(evt:any) {
    let files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

    let reader = new FileReader();

    reader.onload = (function(theFile) {
      return function(e:any) {
        // Render thumbnail.
        let span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        document.getElementById('list').insertBefore(span, null);
      };
    })(f);
    // Read in the image file as a data URL.
    console.log(f);
    reader.readAsDataURL(f);

  }

  //document.getElementById('files').addEventListener('change', handleFileSelect, false);  


}
