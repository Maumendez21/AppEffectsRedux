import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Models/user.mode';

export const setUsers = createAction('[Users] setUsers');
export const setUsersSuccess = createAction(
    '[Users] setUsersSuccess',
    props<{users: User[]}>()
);

export const setUsersError = createAction(
    '[Users] setUsersError',
    props<{payload: any}>()
);