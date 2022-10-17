import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogServService } from 'src/app/login/log-serv.service';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu : boolean = false

  constructor(private http: HttpClient,public logServ: LogServService,private router: Router,public head:HeaderServiceService) { }

  ngOnInit(): void{
    this.head.show();
  }
  logout(){
    localStorage.clear();
    this.logServ.logout()
    this.router.navigate(["login"])
  }
  

}
