import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css in scope: cuando se pasa css en backtick dentro del component
    </p>
  `,
  styles: [
    `
      p{
        color:red;
        font-size:20px;
      }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
