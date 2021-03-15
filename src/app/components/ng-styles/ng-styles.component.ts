import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <p [style.fontSize.px]='size'>
      Hola mundo..... esta es un etiqueta html
    </p>

    <button (click)="size=size+5" class="btn btn-outline-primary">+</button>
    <button (click)="size=size-5" class="btn btn-outline-danger">-</button>
  `,
  styles: [
  ]
})
export class NgStylesComponent implements OnInit {

  size:number = 10
  
  constructor() { }

  ngOnInit(): void {
  }

}
