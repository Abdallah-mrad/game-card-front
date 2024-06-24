import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './Model/Card';
import { CardService } from './service/card.service';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Bienvenue';
  http = inject(HttpClient);
  cards : Card[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.fetchCards();
    
  }
  fetchCards() {
    this.cardService.getRandomDeck().subscribe({
      next: (data:Card[]) => {
        this.cards = data;
      }, 
      error: (err) => console.log(err)
    });
  }


  postCards(cards: Card[]) {
    this.cardService.postDeck(cards).subscribe({
      next: (data) => {
        this.cards = data;
      }, 
      error: (err) => console.log(err)
    });
  }
}
