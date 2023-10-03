import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput')  serverContentInput1 : ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  onAddServer(nameInput: HTMLInputElement){
    console.log(this.serverContentInput1);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput1.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput1.nativeElement.value,
    });
  }
}
