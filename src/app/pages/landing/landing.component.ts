import { Component, OnInit } from '@angular/core';
import { LocationService } from 'app/services/location.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { isEmpty, map, startWith } from 'rxjs/operators';
import { Location } from 'app/models/location';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HelpersService } from 'app/services/helpers.service';
import { NotificationService } from 'app/services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  date: { year: number, month: number };
  model: NgbDateStruct;

  myControl = new FormControl();
  options: Location[];
  currentLocation: Location;
  filteredOptions: Observable<Location[]>;

  constructor(private locationService: LocationService,
    private helpers: HelpersService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this._getLocations();
  }

  private _getLocations() {
    this.locationService.getLocations().subscribe(res => {
      this.options = res.data;
      console.log(this.options);

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  setCurrentLocation(selectedLocation: Location) {
    this.currentLocation = selectedLocation;
  }

  submitClick() {
    if (this._validate()) {
      let date = this.helpers.ngbDateStructToString(this.model);
      // let path: string = "/vehicles/" + this.currentLocation.id + "/" + date; 
      let path: string = "/vehicles/" + this.currentLocation.id; //For now, date is not required but it has been already configured by me. :)
      
      this.router.navigate([path]);
    }

  }

  private _validate(): boolean {
    if (this.currentLocation == undefined || this.currentLocation == null) {
      this.notificationService.showInfo("It seems that you forget to select a location from list.");

      return false;
    }

    if (this.model == undefined || this.model == null) {
      this.notificationService.showError("In order to offer you the awesome rental opportunities, we need to know on what date you will receive the vehicle.");

      return false;
    }

    return true;
  }
}
