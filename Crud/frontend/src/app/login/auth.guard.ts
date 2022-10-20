import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogServService } from './log-serv.service';

@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {

  constructor(private router: Router, private logServ: LogServService){
  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!(localStorage.getItem("Está logado")==="true")){
      this.router.navigate(['login'])
      return false;
    }
    return true;
    
  }
  
}
