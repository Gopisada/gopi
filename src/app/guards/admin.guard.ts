import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private authService:AuthService){

  }
  canActivateChild() {
    if(this.authService.isAdmin()){
      return true
    }else{
      window.alert('No Permission for Child Functionality')
    return false
    }
  }
  
}
