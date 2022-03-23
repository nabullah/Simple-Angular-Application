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
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  createUser() {
    this.signup = this.fb.group({
      'firstname': [null],
      'lastname': [null],
      'email': [null, [Validators.required, Validators.email]],
      'password':[null,Validators.minLength(6)]
    })
  }
  onSubmit() {
    
  }
}
