import {Component, ViewEncapsulation, Renderer2, ElementRef, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  @ViewChild('rangeSlider') rangeSlider: any;
  sideSlideConfig = {
    connect: true,
    range: {
      min: 0,
      max: 99
    },
    step: 1,
    direction:'rtl',
    orientation: 'vertical',
    behaviour: 'tap-drag'
  };
  someRange= [0, 25];
  constructor (private renderer: Renderer2) {
  }
  
  ngAfterViewInit(){
    this.renderer.addClass(this.rangeSlider.el.nativeElement.firstElementChild, 'meter-active');
  }
  captureChange($event) {
    // console.log($event);
  }

  startRange($event, handle, encode) {
    // this.renderer.addClass(handle.el.nativeElement.firstElementChild, 'meter-active');
  }
}
