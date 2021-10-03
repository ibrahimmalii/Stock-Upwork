import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-mode',
  templateUrl: './best-mode.component.html',
  styleUrls: ['./best-mode.component.css']
})
export class BestModeComponent implements OnInit {

  constructor() { }
  @Input() data : any;

  metaData : any;

  ngOnInit(): void {
    this.metaData = this.data.metadata;
    // console.log(this.data.metadata);
  }



}
