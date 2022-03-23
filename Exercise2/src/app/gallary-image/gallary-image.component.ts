import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderServiceService } from '../services/header-service.service';

@Component({
  selector: 'app-gallary-image',
  templateUrl: './gallary-image.component.html',
  styleUrls: ['./gallary-image.component.css']
})
export class GallaryImageComponent implements OnInit, OnDestroy{

  constructor(private _navbarLink: HeaderServiceService,
  private _backGallary:HeaderServiceService) { }

  ngOnInit(): void {
    this._navbarLink.navbarLink.next(false)
    this._backGallary.backGallary.next(true)
  }
  ngOnDestroy(): void {
    this._navbarLink.navbarLink.next(true)
    this._backGallary.backGallary.next(false)
  }
}
