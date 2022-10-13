import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  autenticado = false

  isMenuOpened:boolean = false;
  isMenuOpened2:boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  toggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened
  }
  toggleMenu2():void {
    this.isMenuOpened2 = !this.isMenuOpened2
  }
  
}
