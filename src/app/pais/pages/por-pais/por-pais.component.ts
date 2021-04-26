import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string= "Hola mundo";
  hayError:boolean=false;
  paises:Country[]=[];

  constructor(private PaisService: PaisService) { }
  
  buscar(termino:string){
    this.hayError=false;
    this.termino= termino; 
    console.log(this.termino);
    this.PaisService.buscarPais(termino)
     .subscribe(paises=>{    
      this.paises= paises;
       console.log(paises);
     }, (err)=>{
       this.hayError=true;
       this.paises=[]
     })

  }


}
