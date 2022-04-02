import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApisService {
    constructor(private http: HttpClient) { }
    configUrl = 'https://www.themealdb.com/api'

    ListarAreas() {
        const url = this.configUrl + '/json/v1/1/list.php?a=list/';
        return this.http.get(url, { responseType: 'text' })
    }
    ListarIngredientes() {
        const url = this.configUrl + '/json/v1/1/list.php?i=list';
        return this.http.get(url);
    }
    ListarCategorias() {
        const url = this.configUrl + '/json/v1/1/list.php?c=list';
        return this.http.get(url);
    }
    PlatillosAleatorios() {
        const url = this.configUrl + '/json/v1/1/random.php';
        return this.http.get(url);
    }
    BuscarPlatilloPorId(id: string) {
        const url = this.configUrl + `/json/v1/1/lookup.php?i=${id}`;
        return this.http.get(url);
    }

    ListaPlatillos(searchParam:string) {
        const url = this.configUrl + `/json/v1/1/search.php?s=${searchParam}`;
        return this.http.get(url);
    }

    FiltrarPorCategoria() {
        const url = this.configUrl + '/json/v1/1/filter.php?c=Seafood';
        return this.http.get(url);
    }
    FiltraPorArea() {
        const url = this.configUrl + '/json/v1/1/filter.php?a=Canadian';
        return this.http.get(url);
    }
    FiltrarPorIngredientePrincipal(ingredienteSelect: string) {
        const url = this.configUrl + `/json/v1/1/filter.php?i=${ingredienteSelect}`;
        return this.http.get(url);
    }
}
