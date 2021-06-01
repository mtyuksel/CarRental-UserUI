import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  showInfo(message:string, title:string = "Info", bottomOrTop:string = "top", leftOrCenterOrRight:string = "right") {
    this.toastr.info('<i class="nc-icon nc-bell-55"></i> ' + message, title, {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showSuccess(message:string = "Operation succeded.", title:string = "Success", bottomOrTop:string = "top", leftOrCenterOrRight:string = "right") {
    this.toastr.success('<i class="nc-icon nc-check-2"></i> ' + message, title, {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showError(message:string = "There is an error occurred!", title:string = "An Error Occured!", bottomOrTop:string = "top", leftOrCenterOrRight:string = "right") {
    this.toastr.error('<i class="nc-icon nc-alert-circle-i"></i> ' + message, title, {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-error alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }
}
