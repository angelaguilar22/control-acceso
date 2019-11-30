import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import { Usuarios } from '../../modelos/usuarios';
import { visitas } from '../../modelos/visita';
import { TipoVisita } from '../../modelos/tipo-visita';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})


export class TipoVisitaServices {

    baseUrl: string = environment.api + '/tipo-visita';

    constructor(public httpClient: HttpClient) { }


    get(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl);
    }

    put(tipo: TipoVisita): Observable<any> {

        return this.httpClient.put<any>(this.baseUrl+'/update', tipo, httpOptions).pipe(
            catchError(this.handleError('put tipo-visita', tipo))
        )
    }

    post(tipo: TipoVisita): Observable<any> {
        console.log(tipo, 'datos to add');
        return this.httpClient.post<any>(this.baseUrl+'/add', tipo, httpOptions).pipe(
            catchError(this.handleError('post tipo-visita', tipo))
        )
    }

    
    postVisita(visita: TipoVisita): Observable<any> {
        console.log(visita, 'datos to add');
        return this.httpClient.post<any>('http://localhost:3002/tipo-visita/add', visita, httpOptions).pipe(
            catchError(this.handleError('post tipo-visita', visita))
        )
    }

    getVisitas(): Observable<any> {
        return this.httpClient.get<any>('http://localhost:3002/tipo-visita/');
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}