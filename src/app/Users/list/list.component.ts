import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user.mode';
import { Store } from '@ngrx/store';
import { AppState } from '../../Store/app.reducers';
import { setUsers } from '../../Store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: User[] = [];
  public loading: boolean = false;
  public error: any;

  // constructor(private userService: UserService) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.userService.getUsers()
    // .subscribe((users: any) => {

    //   this.users = users;

    // })

    this.store.select('users')
    .subscribe(({users, loading, error}) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    })

    this.store.dispatch(setUsers());
  }

}
