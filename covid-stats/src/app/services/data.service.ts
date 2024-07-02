// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private covidUpdatesUrl = 'URL_FOR_COVID_UPDATES';
  private ontarioStatusUrl = 'URL_FOR_ONTARIO_STATUS';
  private detailDataUrl = 'URL_FOR_DETAIL_DATA';

  constructor(private http: HttpClient) {}

  getCovidUpdates(): Observable<any> {
    return this.http.get(this.covidUpdatesUrl);
  }

  getOntarioStatus(): Observable<any> {
    return this.http.get(this.ontarioStatusUrl);
  }

  getDetailData(id: string): Observable<any> {
    return this.http.get(`${this.detailDataUrl}/${id}`);
  }
}
