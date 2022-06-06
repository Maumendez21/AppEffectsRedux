import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Models/user.mode';

export const setUser = createAction(
    '[User] setUser',
    props<{id:string}>()
);
export const setUserSuccess = createAction(
    '[Users] setUserSuccess',
    props<{user: User}>()
);

export const setUserError = createAction(
    '[Users] setUserError',
    props<{payload: any}>()
);