import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userLoggedIn: boolean = true
  delIcon = faTrash
  localStorageUsers: any = []
  constructor(private _isLoggedIn: AuthenticationService) {

  }

  ngOnInit(): void {
    this.localStorageUsers = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(this.localStorageUsers)
  }
  deleteUser(i: any) {
    const index = this.localStorageUsers.indexOf(i);
    this.localStorageUsers.splice(index, 1);
    localStorage.setItem('user', JSON.stringify(this.localStorageUsers))
  }

}
