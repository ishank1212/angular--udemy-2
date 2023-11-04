import { style } from '@angular/animations';
import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{


  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor:  string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private eleRef : ElementRef ,private renderer : Renderer2) {
  }

  ngOnInit(){
      // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellow');
      this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData : Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','transparent');
    this.backgroundColor = this.defaultColor;
  }
}