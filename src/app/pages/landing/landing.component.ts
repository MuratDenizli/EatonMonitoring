import { Component, OnInit } from '@angular/core';
import dummydata from './../../@core/data/_devices.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}
  public dataList: {
    description: string;
    id: string;
    img: string;
    name: string;
  }[] = dummydata;

  ngOnInit() {}
}
