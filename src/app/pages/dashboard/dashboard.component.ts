import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dummydata from './../../@core/data/_data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public dataList: {
    data: [];
    description: string;
    id: string;
    img: string;
    name: string;
  }[] = dummydata;

  getAnalyticData(id: string) {
    var data = this.dataList.find((t) => t.id)?.data;
    console.log('data', data);
  }

  ngOnInit() {
    this.getAnalyticData(this.route.snapshot.queryParams['id']);
  }
}
