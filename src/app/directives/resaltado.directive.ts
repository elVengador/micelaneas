import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

    @Input("appResaltado") nuevocolor:string

  constructor(private el:ElementRef) { 
    console.log("directiva fue llamada");
    el.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseenter') mouseEntro(){
    this.resaltarColor(this.nuevocolor || 'yellow')
  }

  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor = null
  }

  resaltarColor(color:string){
    this.el.nativeElement.style.backgroundColor = color
  }

}
