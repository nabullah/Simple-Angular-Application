import { UserdataService } from './../services/userdata.service';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  delIcon = faTrash
  localStorageUsers: any = []
  constructor(private _users: UserdataService) {
    // console.log(this._users.userData)
  }

  ngOnInit(): void {
    this.localStorageUsers = JSON.parse(localStorage.getItem('user') || '{}')
    // console.log(this.localStorageUsers)
  }
  deleteUser(i: any) {
    localStorage.removeItem('user')
  }
}
