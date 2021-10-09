import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { resources } from './resources';
import { Observable } from 'rxjs';
import { DataResponse, Response } from '../models/response';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage["token"]}`)
    };
    return header;
  }

  getAll(): Observable<DataResponse<Movie[]>>{
    return this.httpClient.get<DataResponse<Movie[]>>(environment.apiUrl + resources.movie, this.getHeaders())
  }

  getById(id: Number): Observable<DataResponse<Movie>>{
    return this.httpClient.get<DataResponse<Movie>>(environment.apiUrl + resources.movie + '/' + id, this.getHeaders());
  }

  create(movie: Movie): Observable<Response>{
    return this.httpClient.post<Response>(environment.apiUrl + resources.movie, movie, this.getHeaders());
  }

  update(movie: Movie): Observable<Response>{
    return this.httpClient.put<Response>(environment.apiUrl + resources.movie, movie, this.getHeaders());
  }

  delete(id: Number): Observable<Response>{
    return this.httpClient.delete<DataResponse<Movie>>(environment.apiUrl + resources.movie + '/' + id, this.getHeaders());
  }
}
