import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/response_models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiUrl: string = environment.api_base_url + "locations";

  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<ListResponseModel<Location>> {
    return this.httpClient.get<ListResponseModel<Location>>(this.apiUrl + "get");
  }
}
