import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})

export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component:ProductComponent){
    if(component.userName.dirty){
     return  window.confirm('You have some unsaved Changes do you want to continue?')
    }else{
    return true;
    }
  }
  
}
