import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError, of } from 'rxjs';
import { UserService } from "src/app/Services/user.service";
import * as usersAc from "../actions";



@Injectable()
export class UsersAEffects{
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
    

    public uploadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersAc.setUsers),
            mergeMap(
                () => this.userService.getUsers()
                .pipe(
                    map(users => usersAc.setUsersSuccess({users})),
                    catchError(payload => of(usersAc.setUsersError({payload})))
                )
            )
        )
    );


}