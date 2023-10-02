import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string; name: string; content: string };
  ngOnInit(): void {
    console.log('ngoninit called');
  }

  
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngonchanges called');
    console.log(changes);
  }
  
}
