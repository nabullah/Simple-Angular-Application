import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginButton: HeaderServiceService,
    private _logoutButton: HeaderServiceService,
    private _username: HeaderServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this._loginButton.loginButton.next(true)
    // this._logoutButton.logoutButton.next(false)
    // this._loginButton.loginButton.next(false)
    // this._logoutButton.logoutButton.next(true)
  }
  signIn(username: any, password: any) {
    if (password.value === '123') {
      this._username.username.next(username.value)
      this._logoutButton.logoutButton.next(true)
      this._loginButton.loginButton.next(false)
      this.router.navigate(['products'])
    } else {
      alert("Wrong Password")
    }
  }
}
