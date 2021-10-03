import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-statics',
  templateUrl: './key-statics.component.html',
  styleUrls: ['./key-statics.component.css']
})
export class KeyStaticsComponent implements OnInit {

  constructor() { }

  @Input() data : any;

  metaData : any;
  ngOnInit(): void {
    // console.log(this.data);
    this.metaData = this.data.metaData;
  }



}
