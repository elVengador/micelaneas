import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  nameClass:string='alert-primary'
  propiedades:any={
    danger:false
  }
  isLoading = false

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.isLoading=true
    setTimeout(()=>this.isLoading=false,3000)
  }

}
