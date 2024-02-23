import { Injectable } from '@angular/core';
import { CanActivateChild
, Router } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild
 {
  constructor(private router: Router) {}
  canActivateChild(): Observable<boolean> {
    console.log('AuthGuard Activated');

    const allowAccess: boolean = false;

    if (!allowAccess) {
        console.log('redirecting to login');
        this.router.navigate(['login']);
    }
    return of(allowAccess);
  }
}