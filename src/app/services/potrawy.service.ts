import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PotrawyService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44377/api/foods';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    // Get all food data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

}
