import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() subname: string;
  @Input() formobj: any;

  control:FormControl;
  constructor() { }

  ngOnInit() {
    this.control = this.formobj.get(this.subname);
  }

}
