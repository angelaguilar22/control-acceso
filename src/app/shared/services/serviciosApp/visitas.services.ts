import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import { Usuarios } from '../../modelos/usuarios';
import { visitas } from '../../modelos/visita';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})


export class visitasService {

    baseUrl: string = environment.api + '/visitas';

    constructor(public httpClient: HttpClient) { }

    postVisitaGeneral(visita: visitas): Observable<any> {
        console.log(visita, 'datos to add');
        return this.httpClient.post<any>(this.baseUrl + '/addGeneral', visita, httpOptions).pipe(
            catchError(this.handleError('post usuario', visita))
        )
    }


    postVisita(visita: visitas): Observable<any> {
        console.log(visita, 'datos to add');
        return this.httpClient.post<any>(this.baseUrl + '/add', visita, httpOptions).pipe(
            catchError(this.handleError('post usuario', visita))
        )
    }

    getVisitas(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl + '/visitas');
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