
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/shared/services/apis.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit {
  data: any
  ingrediente:any
  constructor(public apiService: ApisService, private route: Router) { }
  ngOnInit() {
    this.apiService.ListarIngredientes()
      .subscribe((data: any) => this.data = data.meals);
  }
  selectIngrediente(event:any,item:any){
    this.route.navigate(['/ingrediente-platillos', item]);
  }
}
