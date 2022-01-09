import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopContent } from './Models/TopContent';
@Injectable({
  providedIn: 'root'
})
export class SearchHabibIMDBService {
  serviceBaseURL = 'https://localhost:44364/api/imdb/';
  searchDBAPI = 'searchContent';
  voteAPI = 'vote';
  //https://localhost:44364/api/imdb/searchContent?query=3 stars&contentType=false&page=0
  constructor(private _http: HttpClient) { }
  searchContent(query, contentType, page) {
    return this._http.get<TopContent[]>(this.serviceBaseURL + this.searchDBAPI + "?query="+query + "&contentType="+contentType + "&page="+page);
  }
  vote(id, newScore, contentType){
    return this._http.get<Boolean>(this.serviceBaseURL + this.voteAPI + "?id="+id +"&newScore=" + newScore + "&contentType="+contentType );
  }
}
