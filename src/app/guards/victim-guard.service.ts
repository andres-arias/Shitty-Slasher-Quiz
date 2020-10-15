import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VictimsService } from '../service/victims.service';

@Injectable()
export class VictimGuard implements CanActivate {

  constructor(private victimService: VictimsService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.victimService.isValid()) {
        return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
