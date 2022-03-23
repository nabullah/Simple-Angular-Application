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
  navbarLink: boolean = true //Navbar Li
  loginButtons: boolean = true; //Login and Logout Buttons
  username: string = '';
  constructor(private _goBackProduct: HeaderServiceService,
    private _navbarLink: HeaderServiceService,
    private _gallaryBack: HeaderServiceService,
    private _productBack: HeaderServiceService,
    private _loginButton: HeaderServiceService,
    private _logoutButton: HeaderServiceService,
    private _username:HeaderServiceService
  ) {
    this._navbarLink.navbarLink.subscribe(res => {
      this.navbarLink = res; 
    });
    this._gallaryBack.backGallary.subscribe(res => {
      this.backGallaryButtons = res;
    });
    this._productBack.backProduct.subscribe(res => {
      this.backProductButtons = res;
    })
    this._loginButton.loginButton.subscribe(res => {
      this.loginButtons = res;
    })
    this._logoutButton.logoutButton.subscribe(res => {
      this.logoutButtons = res;
    })
    this._username.username.subscribe(res => {
      this.username = res;
    })
   }

  ngOnInit(): void {
  }
  logOut() {
    this._loginButton.loginButton.next(true);
    this._logoutButton.logoutButton.next(false);
  }
}
