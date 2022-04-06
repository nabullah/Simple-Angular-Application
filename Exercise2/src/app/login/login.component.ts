import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { HeaderServiceService } from './../services/header-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  userdata: any = []
  email: any;
  password: any;
  signin!: FormGroup;
  localItem: any;
  getLocalStorage: any;
  alertActive: boolean = false
  username: any;
  submitted: boolean = false;

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
    // if (this.localItem === null) {
    //   this.userdata = []
    // } else {
    //   this.userdata = JSON.parse(this.localItem)
    // }
    this._loginAlert.loginAlert.subscribe(res => {
      this.alertActive = res
    });
  }

  ngOnInit(): void {
    this.receiveUser();
    this.f;
    // this.alertActive = true
  }
  onSubmit() {
    this.submitted = true
    if (this.signin.errors) {
      return
    }

    if (this.signin.valid) {
      this.signIn();
    } else {
      this.submitted = true
    }
  }

  receiveUser() {
    this.signin = this.fb.group({
      'email': ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      'password': ['', [Validators.minLength(6), Validators.required]]
    })
  }
  // SignIn function 
  signIn() {
    this.getLocalStorage = JSON.parse(localStorage.getItem("user") || '{}')
    if (localStorage.getItem('user') !== null) {
      for (var i = 0; i < this.getLocalStorage.length; i++) { //Iterating through user object in localstorage
        if (this.getLocalStorage[i].email === this.signin.get('email')?.value && this.getLocalStorage[i].password === this.signin.get('password')?.value) {
          this._username.username.next(this.getLocalStorage[i].firstname + " " + this.getLocalStorage[i].lastname) //Sending values of Firstname and lastname to userdata service to display in navbar
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
    } else {
      console.log('Signup First')
    }
  }
  get f() {
    return console.log(this.signin.controls)
  }
}

