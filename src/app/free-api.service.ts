import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeApiService {

  constructor(private httpClient: HttpClient) { }

    getTVShow(searchText: string): Observable<any>{     
  
      return this.httpClient.get(`http://api.tvmaze.com/search/shows?q=${searchText}`)
    }
}
