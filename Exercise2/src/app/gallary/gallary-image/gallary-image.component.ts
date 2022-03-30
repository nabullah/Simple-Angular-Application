import { GallaryItems } from '../../appModals/gallary';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderServiceService } from '../../services/header-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gallary-image',
  templateUrl: './gallary-image.component.html',
  styleUrls: ['./gallary-image.component.css']
})
export class GallaryImageComponent implements OnInit, OnDestroy {

  gallaryItems: any = [];
  selectedItem: any;
  id: any;
  constructor(
    private _navbarLink: HeaderServiceService,
    private _backGallary: HeaderServiceService,
    private gallaryImages: GallaryItems,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._navbarLink.navbarLink.next(false)
    this._backGallary.backGallary.next(true)
    this.gallaryItems = this.gallaryImages.gallaryImages
    this.selectedItem = this.gallaryItems[this.id]
    // console.log(this.selectedItem)
    this._activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    })
    console.log(this.id)
  }
  ngOnDestroy(): void {
    this._navbarLink.navbarLink.next(true)
    this._backGallary.backGallary.next(false)
  }

}
