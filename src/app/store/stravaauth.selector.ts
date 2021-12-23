import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { AuthState } from "./stravaauth.state";

export const selectAuth = createFeatureSelector<AuthState>('Authdata')

export const selectStravaRefreshToken = createSelector(
    selectAuth,
    (state: AuthState) => state.refresh_token
);

export const selectStravaAccessToken = createSelector(
  selectAuth,
  (state: AuthState) => state.access_token
);

export const selectStravaAuthLoading = createSelector(
    selectAuth,
    (state: AuthState) => state.loading
);

export const selectStravaAuthresult = createSelector(
  selectAuth,
  (state: AuthState) => state.Authresult
);


