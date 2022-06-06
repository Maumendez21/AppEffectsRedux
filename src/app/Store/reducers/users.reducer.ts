import { createReducer, on } from '@ngrx/store';
import { setUsers, setUsersError, setUsersSuccess } from '../actions';
import { User } from '../../Models/user.mode';

export interface UsersState {
    users  : User[],
    loaded : boolean,
    loading: boolean,
    error  : any 
}

export const usersInitialState: UsersState = {
    users : [],
   loaded : false,
   loading: false,
   error : null
}

export const _usersReducer = createReducer(usersInitialState,

    on(setUsers, state => ({ ...state, loading: true})),
    on(setUsersSuccess, (state, {users}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [...users]
    })),
    on(setUsersError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);