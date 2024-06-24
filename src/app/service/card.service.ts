import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../Model/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }
  getRandomDeck(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/random-deck`);
  }
  postDeck(cards: Card[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/sorted-deck`, cards);
  }
}
