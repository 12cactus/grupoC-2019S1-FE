import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UtilsService {

  constructor(private toastr: ToastrService) { }

  showNotification(from, align, message, type) {

  const color = Math.floor((Math.random() * 5) + 1);
  switch (type) {
    case 'info':
    this.toastr.info('<span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span> ' + message + '', '', {
        timeOut: 8000,
        closeButton: false,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
        positionClass: 'toast-' + from + '-' +  align
      });
      break;
    case 'success':
      this.toastr.success('<span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span> ' + message + '', '', {
        timeOut: 8000,
        closeButton: false,
        enableHtml: true,
        toastClass: 'alert alert-success alert-with-icon',
        positionClass: 'toast-' + from + '-' +  align
      });
      break;
    case 'warning':
      this.toastr.warning('<span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span> ' + message + '', '', {
        timeOut: 8000,
        closeButton: false,
        enableHtml: true,
        toastClass: 'alert alert-warning alert-with-icon',
        positionClass: 'toast-' + from + '-' +  align
      });
      break;
    case 'error':
      this.toastr.error('<span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span> ' + message + '', '', {
        timeOut: 8000,
        enableHtml: true,
        closeButton: false,
        toastClass: 'alert alert-danger alert-with-icon',
        positionClass: 'toast-' + from + '-' +  align
      });
      break;
    case 'primary':
      this.toastr.show('<span class="alert-inner--icon"><i class="ni ni-bell-55"></i></span> ' + message + '', '', {
        timeOut: 8000,
        closeButton: false,
        enableHtml: true,
        toastClass: 'alert alert-primary alert-with-icon',
        positionClass: 'toast-' + from + '-' +  align
      });
      break;
    default:
      break;
    }
  }
}

