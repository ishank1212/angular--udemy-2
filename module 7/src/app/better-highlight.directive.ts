import { style } from '@angular/animations';
import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private eleRef : ElementRef ,private renderer : Renderer2) {
  }

  ngOnInit(){
      this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData : Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','transparent');
    this.backgroundColor = 'transparent';
  }
}
