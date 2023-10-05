import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'], 
  // providers : [LoggingService]
})
export class AccountComponent {

  constructor(private logService: LoggingService, private accountService: AccountService){}

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);

  }
}