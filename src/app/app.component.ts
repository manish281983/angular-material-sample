import { Component, OnInit } from '@angular/core';
import mockNavList from '../assets/json/nav-bar.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  navBar: any;
  ngOnInit() {
    this.navBar = mockNavList;
  }
  redirectPage(page: string) {
   console.log(page); 
   this.router.navigate(['/', page]);
  }
}
