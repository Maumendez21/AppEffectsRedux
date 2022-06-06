import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError, of } from 'rxjs';
import { UserService } from "src/app/Services/user.service";
import * as usersAc from "../actions";



@Injectable()
export class UserAEffects{
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
    

    public uploadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersAc.setUser),
            mergeMap(
                (action) => this.userService.getUserById(action.id)
                .pipe(
                    map(user => usersAc.setUserSuccess({user})),
                    catchError(payload => of(usersAc.setUserError({payload})))
                )
            )
        )
    );


}