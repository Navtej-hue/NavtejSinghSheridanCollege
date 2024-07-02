// src/app/page/detail-data/detail-data.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.css']
})
export class DetailDataComponent implements OnInit {
  detailData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.dataService.getDetailData(id).subscribe(data => {
        this.detailData = data;
      });
    });
  }
}
