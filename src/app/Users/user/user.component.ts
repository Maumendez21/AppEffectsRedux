import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/Models/user.mode';
import { setUser } from 'src/app/Store/actions';
import { AppState } from '../../Store/app.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user !: User | any;
  public loading: boolean = false;
  public error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {


    this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    })



    this.router.params.subscribe(({id}) => {
      this.store.dispatch(setUser({id}));
    })
  }

}
