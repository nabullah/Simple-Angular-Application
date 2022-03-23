import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(private _garllaryButton: HeaderServiceService,
  private _headerLink:HeaderServiceService) { }

  ngOnInit(): void {
    this._headerLink.navbarLink.next(true);
   
  }
  openImage() {
   
 }
  // ngOnDestroy(): void {
  //   this._headerLink.navbarLink.next(false);
  // }
}
