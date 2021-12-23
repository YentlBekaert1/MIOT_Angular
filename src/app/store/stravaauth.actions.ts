import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Auth, ReAuth } from './stravaauth.model';

export const ReceivedRefreshToken = createAction(
  '[auth] Received RefreshToken',
  props<{refresh_token: string}>()
);

export const ReceivedAccessToken = createAction(
  '[auth] Received AccessToken',
  props<{access_token: string}>()
);

export const LoadAuthenticate = createAction(
  '[auth] Load Authenticate',
);

export const NeedCode = createAction(
  '[auth] NeedCode',
);

export const GotCode = createAction(
    '[auth] GotCode',
  );

export const AuthActions = {
    NeedCode:NeedCode,
    GotCode:GotCode,
    ReceivedRefreshToken:ReceivedRefreshToken,
    ReceivedAccessToken:ReceivedAccessToken,
    LoadAuthenticate:LoadAuthenticate,
}
