import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {environment as env} from '../../environments/environment';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  search: string;
  users: string;
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
    this.search = '';
    this.users = null;
  }

  ngOnInit() {
  }

  searchUsers(e) {
    this.search = e.target.value;
    this.usersService.get(env.API_URL);

  }

}
