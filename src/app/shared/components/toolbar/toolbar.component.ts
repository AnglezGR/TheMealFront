import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public appName = 'The Meal Front';
  constructor(public authSvc: AuthService,  private route: Router) {}

  ngOnInit() {}

  onLogout(): void {
    this.authSvc.logout();
    this.route.navigate(['/login']);
  }
}
