// src/app/canada-summary/key-updates/key-updates.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.css']
})
export class KeyUpdatesComponent implements OnInit {
  updates: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCovidUpdates().subscribe(data => {
      this.updates = data;
    });
  }
}
