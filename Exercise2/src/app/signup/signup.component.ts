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
  confirmpassword: boolean = false;
  submitted: boolean = false

  constructor(private fb: FormBuilder,
    private router: Router,
    private _userData: UserdataService,
  ) {

  }

  ngOnInit(): void {
    this.createUser();

  }

  // Form Group for Users Details 
  createUser() {
    this.signup = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      'password': ['', [Validators.minLength(6), Validators.required]],
      'confirmpassword': ['', [Validators.minLength(6), Validators.required]],
    })
  }
  // Submission of Form 
  onSubmit() {
    // debugger
    this.submitted = true
    if (this.signup.errors) {
      return
    }
    if (this.signup.valid) {
      this.confirmpassword = false;
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



}
