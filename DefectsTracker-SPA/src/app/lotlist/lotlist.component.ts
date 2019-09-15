import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-lotlist',
  templateUrl: './lotlist.component.html',
  styleUrls: ['./lotlist.component.css']
})
export class LotlistComponent implements OnInit {
  // lotlist: any;
  users: User[];
  baseUrl = environment.apiUrl;

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    // this.getValues();
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error('Unable to load data from database.');
    });
  }
  // getValues() {
  //   this.http.get(environment.apiUrl + 'users/').subscribe(response => {
  //     this.lotlist = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  // getValues() {
  //   this.http.get('http://localhost:5000/api/users').subscribe(response => {
  //     this.lotlist = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }


}
