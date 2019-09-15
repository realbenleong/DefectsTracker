import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  @Output() registerIsShownEvent = new EventEmitter();
  @Output() listIsShownEvent = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  activateRegister() {
    this.registerIsShownEvent.emit(true);
    this.listIsShownEvent.emit(false);
    // this.registerIsShown = true;
    // this.listIsShown = false;
    console.log('Register visible!');
  }

  activateList() {
    this.registerIsShownEvent.emit(false);
    this.listIsShownEvent.emit(true);
    // this.listIsShown = true;
    // this.registerIsShown = false;
    console.log('List visible!');
  }

}
