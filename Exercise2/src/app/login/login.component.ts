import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  userdata: any = []
  signin!: FormGroup;
  localItem: any;
  getLocalStorage: any;
  fn: any;
  pass: any
  constructor(private _loginButton: HeaderServiceService,
    private _logoutButton: HeaderServiceService,
    private _username: HeaderServiceService,
    private router: Router,
    private fb: FormBuilder,
    private _userdata: UserdataService
  ) {
    this.localItem = localStorage.getItem('user');
    if (this.localItem === null) {
      this.userdata = []
    } else {
      this.userdata = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
    this.receiveUser();
    // this.fn = this.findUser()
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

        // console.log(this.getLocalStorage[i].firstname)
        // console.log(this.getLocalStorage[i].password)
        this._username.username.next(uname.value)
        this._logoutButton.logoutButton.next(true)
        this._loginButton.loginButton.next(false)
        this.router.navigate(['products'])
        // console.log(uname)
        // console.log(i)
        break;
      } else {
        console.log('Wrong Password')
      }

    }
  }
}

