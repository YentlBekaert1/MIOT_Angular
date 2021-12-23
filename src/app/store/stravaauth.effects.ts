import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StravaService } from '../strava.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthEffects {

  /*LoadAuthenticate$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.LoadAuthenticate),
        mergeMap(() => this.stravaService.Auth()
          .pipe(
              map(Authresult => Authenticate({Authresult}) ),
              catchError((error) => of(AuthenticateFail({error})))

          )

      )));*/
    constructor(private actions$: Actions, private stravaService: StravaService){}
}
