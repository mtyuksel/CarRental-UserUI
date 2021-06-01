import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetailDto } from 'app/models/DTOs/carDetailDto';
import { ListResponseModel } from 'app/models/response_models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiURL = environment.api_base_url + "cars";

  constructor(private httpClient: HttpClient) { }

  getVehiclesByLocation(locationId: number) : Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiURL + "/getbylocation?locationID=" + locationId);
  }

}
