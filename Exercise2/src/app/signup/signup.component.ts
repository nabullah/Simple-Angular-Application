
import { UserdataService } from './../services/userdata.service';
import { Component, OnInit, Output } from '@angular/core';
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
      'firstname': ['Nabullah', Validators.required],
      'lastname': ['Ansari', Validators.required],
      'email': ['n@g.com', [Validators.required, Validators.email]],
      'password': ['123456', [Validators.minLength(6), Validators.required]]
    })
  }
  onSubmit() {
    this._userData.saveUserData(this.signup.value)
  }
}
