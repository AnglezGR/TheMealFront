
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  dataUser:any;

  constructor() { }

  ngOnInit() {
    this.dataUser = localStorage.getItem('userData')
    this.dataUser = JSON.parse(this.dataUser)
  }
}
