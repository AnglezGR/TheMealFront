import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-app',
  templateUrl: './container-app.component.html',
  styleUrls: ['./container-app.component.scss']
})
export class ContainerAppComponent implements OnInit {
  public opened = false;
  dataUser:any;

  constructor( private route: Router) {}

  ngOnInit() {
    this.dataUser = localStorage.getItem('userData')
    this.dataUser = JSON.parse(this.dataUser)
    if(!this.dataUser)
      this.route.navigate(['/login']);
  }
}
