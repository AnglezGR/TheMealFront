
import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/shared/services/apis.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-platillos-ingrediente',
  templateUrl: './platillos-ingrediente.component.html',
  styleUrls: ['./platillos-ingrediente.component.scss']
})
export class PlatillosIngredienteComponent implements OnInit {
  data: any;
  ingredienteSelect: any;
  constructor(public apiService: ApisService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.ingredienteSelect = params['ingrediente']);
    this.apiService.FiltrarPorIngredientePrincipal(this.ingredienteSelect)
      .subscribe((data: any) => {      
        this.data = data.meals
      });
  }
  selectPlatillo(item:any){
    this.router.navigate(['/platillo-detail', item.idMeal]);
  }
}
