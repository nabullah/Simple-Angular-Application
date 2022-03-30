import { AuthenticationService } from './../services/authentication.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata: any = []
  signin!: FormGroup;
  localItem: any;
  getLocalStorage: any;
  pass: any
  alertActive: boolean = false
  username: any;

  constructor(private _loginButton: HeaderServiceService,
    private _logoutButton: HeaderServiceService,
    private _username: HeaderServiceService,
    private router: Router,
    private fb: FormBuilder,
    private _loginAlert: HeaderServiceService,
    private _authentication: AuthenticationService
  )
  // Constructor 
  {
    this.localItem = localStorage.getItem('user');
    if (this.localItem === null) {
      this.userdata = []
    } else {
      this.userdata = JSON.parse(this.localItem)
    }
    this._loginAlert.loginAlert.subscribe(res => {
      this.alertActive = res
    });


  }

  ngOnInit(): void {
    this.receiveUser();
  }
  onSubmit() {
    this.signIn;
  }
  receiveUser() {
    this.signin = this.fb.group({
      'username': ['Nabullah', Validators.required],
      'password': ['123456', Validators.minLength(6)]
    })
  }

  signIn(uname: any, pass: any) {
    this.getLocalStorage = JSON.parse(localStorage.getItem("user") || '{}')
    // console.log(this.getLocalStorage)
    for (var i = 0; i < this.getLocalStorage.length; i++) {
      if (this.getLocalStorage[i].firstname === uname.value && this.getLocalStorage[i].password === pass.value) {
        this._username.username.next(this.getLocalStorage[i].firstname + " " + this.getLocalStorage[i].lastname)
        this._logoutButton.logoutButton.next(true)
        this._loginButton.loginButton.next(false)
        this._authentication.isLoggedIn.next(true)
        this.router.navigate([''])
        localStorage.setItem('userLogin', '1')
      } else {
        this._loginAlert.loginAlert.next(true);
      }
      localStorage.setItem('username', this.getLocalStorage[i].firstname + " " + this.getLocalStorage[i].lastname)
    }
  }



}

