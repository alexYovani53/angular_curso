import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(private authSrv: AuthService, private router: Router) { }

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authSrv.auth == undefined) return false;
    // return true;
    return this.authSrv.verificaAuthenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['/auth/login'])
          }
        })
      )
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authSrv.auth == undefined) return false;
    // return true;
    return this.authSrv.verificaAuthenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['/auth/login'])
          }
        })
      )
  }

}
