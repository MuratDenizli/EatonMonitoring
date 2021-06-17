import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  constructor() {}
  @Input() data: any = {};

  ngOnInit(): void {
    console.log('data', this.data);
  }
}