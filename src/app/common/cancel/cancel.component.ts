import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  constructor(public readonly swalTargets: SwalPortalTargets,
    private route: Router) { }

  ngOnInit() {
    Swal.fire({
      title: 'Purchase Cancel',
      imageUrl: 'assets/image/cancel.jpeg',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      showCloseButton: true,
    }).then((result) => {
      console.log(result);
      if (result.isDismissed) {
        this.route.navigateByUrl('/');
      }
    })
  }
  close() {
    this.route.navigateByUrl('/');
  }


}
