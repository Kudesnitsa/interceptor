import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  search: string;
  searchText: string;
  users: object[];
  searchableFields: string[];
  private timeOutId: number;
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
    this.search = '';
    this.searchText = '';
    this.users = null;
    this.searchableFields = ['username', 'name', 'email', 'address.city'];
  }

  ngOnInit() {
    this.usersService.get('/public/users')
      .subscribe(
        users => this.users = users,
        err => console.log(err)
      );
  }

  searchUsers(e) {
    this.search = e.target.value;
    clearTimeout(this.timeOutId);
    this.timeOutId = setTimeout(() => {
      this.searchText = e.target.value;
      clearTimeout(this.timeOutId);
    }, 500);

  }

}
