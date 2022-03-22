import { HeaderServiceService} from '../services/header-service.service';
import { Component, OnInit } from '@angular/core';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBiohazard, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // fontAwesome Icons 
  profile = faArtstation;
  logo = faBiohazard;
  bars = faBars;
  circleleft = faCircleArrowLeft;

  backProductButtons: boolean = false;//Back Product Buttons
  backGallaryButtons: boolean = false;//Back Gallary Buttons
  logoutButtons: boolean = false;//Logout Buttons
  navul: boolean = true //Navbar Li
  loginButtons: boolean = true; //Login and Logout Buttons

  constructor(private _goBackProduct: HeaderServiceService,private _navbarLink:HeaderServiceService) {
    this._goBackProduct.gobackProductButton.subscribe(res => {
      this.backProductButtons = res;
    });
    this._navbarLink.navbarLink.subscribe(res => {
      this.navul = res; 
    });
   }

  ngOnInit(): void {
  }

}
