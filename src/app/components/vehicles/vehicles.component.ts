import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'app/models/DTOs/carDetailDto';
import { VehicleService } from 'app/services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  locationId: number;
  availableVehicles: CarDetailDto[];

  constructor(private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.locationId = params["locationId"];
      console.log("LocID", this.locationId);
      this.vehicleService.getVehiclesByLocation(this.locationId).subscribe(response => {
        this.availableVehicles = response.data;
      });
    });
  }

  getVehicles() {

  }
}
