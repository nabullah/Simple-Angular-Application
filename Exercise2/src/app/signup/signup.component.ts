
import { UserdataService } from './../services/userdata.service';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';


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
  confirmpassword: any;

  constructor(private fb: FormBuilder,
    // private http: HttpClient,

    private _userData: UserdataService,

    // private _createUserDB: UserdataService
  ) {

  }

  ngOnInit(): void {
    this.createUser();
    console.log(this._userData.userData)
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
    this._userData.saveUserData(this.signup.value)
    this.signup.reset();
  }
  get f() {
    return this.signup.controls
  }
}

