import { GallaryItems } from './../appModals/gallary';
import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  gallaryImages = []
  constructor(
    private _gallaryItems: GallaryItems,
    private _headerLink: HeaderServiceService) { }

  ngOnInit(): void {
    this._headerLink.navbarLink.next(true);
    this.gallaryImages = this._gallaryItems.gallaryImages;
    console.log(this.gallaryImages)
  }
}
