import { UserdataService } from './../services/userdata.service';
import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {}
  constructor(private _loginButton: HeaderServiceService,
    private _logoutButton: HeaderServiceService,
    private _username: HeaderServiceService,
    private router: Router,
    private _userdata: UserdataService
  ) { }

  ngOnInit(): void {
    this._userdata.userData().subscribe(data => {
      // console.log(this.userData = data)
      this.userData = data
    })
  }


  signIn(username: any, password: any) {
    // const user = this._userdata.userData
    if (password.value === '12345') {
      this._username.username.next(username.value)
      this._logoutButton.logoutButton.next(true)
      this._loginButton.loginButton.next(false)
      this.router.navigate(['products'])
    } else {
      alert("Wrong Password")
    }
  }
  // find user form database
  userFind(user: any) {
    this._userdata.userData
  }
}

