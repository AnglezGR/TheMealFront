
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/shared/services/apis.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {
  data:any;
  searchParam:any;
  constructor(public apiService:ApisService, private router: Router) { }

  ngOnInit() {
    this.searchFn('')
  }

  searchFn(data:any){
    this.apiService.ListaPlatillos(data)
    .subscribe((data: any) => {      
      this.data = data.meals
    });
  }
  selectPlatillo(item:any){
    this.router.navigate(['/platillo-detail', item.idMeal]);
  }
}
