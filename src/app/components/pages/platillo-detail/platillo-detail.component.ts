
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApisService } from 'src/app/shared/services/apis.service';

@Component({
  selector: 'app-platillo-detail',
  templateUrl: './platillo-detail.component.html',
  styleUrls: ['./platillo-detail.component.scss']
})
export class PlatilloDetailComponent implements OnInit {
  idMeal:string = ''
  data: any
  constructor(private route: ActivatedRoute,public apiService: ApisService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.idMeal = params['id']);
    this.apiService.BuscarPlatilloPorId(this.idMeal)
    .subscribe((data: any) => this.data=data);
  }
}