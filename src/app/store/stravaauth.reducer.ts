import { createReducer, on } from '@ngrx/store';
import {ReceivedAccessToken,ReceivedRefreshToken,NeedCode,GotCode,} from './stravaauth.actions';
import {AuthState } from "./stravaauth.state";


export const initialAuthState: AuthState = {
    loading: false,
    refresh_token:"",
    access_token:"",
    Authresult: [],
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(NeedCode,(state) => ({...state, loading:false})),
  on(GotCode,(state) => ({...state, loading:true})),
  on(ReceivedRefreshToken, ((state, {refresh_token}) => ({...state, refresh_token:refresh_token}))),
  on(ReceivedAccessToken, ((state, {access_token}) => ({...state, access_token:access_token}))),
);
