import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  sideSlideConfig = {
    connect: true,
    range: {
      min: 0,
      max: 99
    },
    step: 1,
    direction:'rtl',
    orientation: 'vertical',
    behaviour: 'tap-drag',
    pips: {
      mode: 'range',
      density: 33
    }
  };
  someRange= [0, 25];
  constructor () {

  }
  captureChange($event) {
    console.log($event);
  }
}
