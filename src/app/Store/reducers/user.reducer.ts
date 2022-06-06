import { createReducer, on } from '@ngrx/store';
import { setUser, setUserError, setUserSuccess } from '../actions';
import { User } from '../../Models/user.mode';

export interface UserState {
    id: string ,
    user  : User | {},
    loaded : boolean,
    loading: boolean,
    error  : any 
}

export const userInitialState: UserState = {
   id: '',
   user : {},
   loaded : false,
   loading: false,
   error : null
}

export const _userReducer = createReducer(userInitialState,

    on(setUser, (state, {id}) => ({ 
        ...state, 
        loading: true,
        id: id
    })),
    on(setUserSuccess, (state, {user}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user,
        error: null
    })),
    on(setUserError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        user: {},
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);