import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  ngbDateStructToString(ngbDateStruct: NgbDateStruct) : string {
    let date = ngbDateStruct.day + "." + ngbDateStruct.month + "." + ngbDateStruct.year;
    return date.toString();
  }
}
