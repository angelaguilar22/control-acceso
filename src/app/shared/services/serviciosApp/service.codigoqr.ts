import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import {  codigoQR} from '../../modelos/codigo-qr';
import { visitas } from '../../modelos/visita';
import { TipoVisita } from '../../modelos/tipo-visita';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})


export class CodigoQrService {

    baseUrl: string = environment.api + '/qrcode';

    constructor(public httpClient: HttpClient) { }


    get(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl+"/list");
    }

    put(qr: codigoQR): Observable<any> {

        return this.httpClient.put<any>(this.baseUrl+'/update', qr, httpOptions).pipe(
            catchError(this.handleError('put tipo-visita', qr))
        )
    }

    post(qr: codigoQR): Observable<any> {
        console.log(qr, 'datos to add');
        return this.httpClient.post<any>(this.baseUrl+'/add', qr, httpOptions).pipe(
            catchError(this.handleError('post tipo-visita', qr))
        )
    }

    delete(qr: codigoQR): Observable<any>{
        
        return this.httpClient.delete(this.baseUrl+'/delete/'+qr.id,httpOptions).pipe(
            catchError(this.handleError('deletedEmpleado'))
        );
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