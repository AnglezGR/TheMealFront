
import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/shared/services/apis.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
  data: any
  constructor(public apiService: ApisService) { }
  ngOnInit() {
    this.apiService.PlatillosAleatorios()
      .subscribe((data: any) => this.data=data);
  }
}
