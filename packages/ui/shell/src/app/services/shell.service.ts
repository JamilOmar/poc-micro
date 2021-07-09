import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'core-ui';
import urljoin  from 'url-join';
@Injectable({
  providedIn: 'root'
})
export class ShellService {

  private baseUrl: string;
  constructor(
    private http: HttpClient, 
    private config: ConfigService) { 
      this.baseUrl = this.config.get('shell')?.url;
  }

  getRoutes(){
    const url = urljoin(this.baseUrl,'modules');
    return this.http.get(url);
  }
}
