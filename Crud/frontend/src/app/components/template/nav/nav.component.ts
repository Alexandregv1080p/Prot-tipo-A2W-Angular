import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogServService } from 'src/app/login/log-serv.service';
import { LoginComponent } from 'src/app/login/login.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  visible: boolean
  isUserAuthenticated = true;
  isMenuOpened:boolean = false;
  isMenuOpened2:boolean = false;

  constructor(private router: Router,public logServ: LogServService ) {this.visible =false }
  
  isAutenticado = false

  ngOnInit(): void {
    
  }
  
  toggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened
  }
  toggleMenu2():void {
    this.isMenuOpened2 = !this.isMenuOpened2
  }
  
  logout(){
    localStorage.clear();
    this.logServ.logout();   
    this.router.navigate(["login"])
  }
  
}
