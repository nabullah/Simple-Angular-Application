import { AuthenticationService } from './../services/authentication.service';
import { UserdataService } from './../services/userdata.service';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _users: UserdataService,
  ) {

  }

  ngOnInit(): void {

    // console.log(this.localStorageUsers)
  }

}
