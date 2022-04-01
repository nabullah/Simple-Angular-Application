import { Router } from '@angular/router';
import { UserdataService } from './../services/userdata.service';
import { Component, OnInit, } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { format } from 'path';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup!: FormGroup
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGithub = faGithub
  // userData: any = []
  confirmpassword: boolean = false;
  submitted: boolean = true

  constructor(private fb: FormBuilder,
    private router: Router,
    // private http: HttpClient,
    private _userData: UserdataService,
    // private _createUserDB: UserdataService
  ) {

  }

  ngOnInit(): void {
    this.createUser();
    console.log(this._userData.userData)
    // this.formValidCheck()
    this.submitted = true
    if (this.signup.errors) {
      return
    }
  }
  createUser() {
    this.signup = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      'password': ['', [Validators.minLength(6), Validators.required]],
      'confirmpassword': ['', [Validators.minLength(6), Validators.required]],

    })
  }
  onSubmit() {
    if (this.signup.valid) {
      // this.submitted = false/
      if (this.signup.value.password === this.signup.value.confirmpassword) {
        this._userData.saveUserData(this.signup.value)
        this.router.navigate(['login']);
        this.signup.reset();
      } else {
        this.confirmpassword = true;
      }
    } else {
      this.submitted = true
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.signup.controls;
  }
  // formValidCheck() {
  //   this.signup.get('email')?.errors
  //   this.signup.get('firstname')?.errors
  //   this.signup.get('lastname')?.errors
  //   this.signup.get('password')?.errors
  //   this.signup.get('confirmpassword')?.errors

  //   return
  // }



}
