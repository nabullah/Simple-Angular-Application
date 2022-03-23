import { UserdataService } from './../services/userdata.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    // private _createUserDB: UserdataService
  ) { }

  ngOnInit(): void {
    this.createUser();
  }
  createUser() {
    this.signup = this.fb.group({
      'firstname': [null, Validators.required ],
      'lastname': [null,Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password':[null,[Validators.minLength(6), Validators.required]]
    })
  }
  onSubmit() {
    // console.log(this.signup.value);
    this.http.post<any>("http://localhost:3000/signupUsers", this.signup.value).subscribe(res => {
      alert('SignUp Successful');
      this.signup.reset();
    })
  }
}
