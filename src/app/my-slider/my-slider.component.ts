import {Component, ViewEncapsulation, Renderer2, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
/**
 * Created by jason on 16/09/17.
 */

@Component({
  selector: 'my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css']
})
export class MySliderComponent implements AfterViewInit {
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
    console.log($event);
  }
}
