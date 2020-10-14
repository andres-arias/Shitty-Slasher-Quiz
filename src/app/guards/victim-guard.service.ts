import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class VictimGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isValid()) {
        return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
