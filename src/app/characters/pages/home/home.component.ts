import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '../../interfaces/character.model';

import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  next: string = '';
  prev: string | null = null;
  characters: Character[] = [];

  constructor(
    private router: Router,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getAll()
      .subscribe(resp => {
        this.characters = resp.results;
        this.next = resp.info.next;
        this.prev = resp.info.prev;
        console.log(this.prev)
      })
  }

  nextPage() {
    if(this.next !== null) {
      this.charactersService.nextPage(this.next)
        .subscribe(resp => {
          this.characters = resp.results;
          this.next = resp.info.next;
          this.prev = resp.info.prev;
        })
    }

    return
  }

  prevPage() {
    if(this.prev !== null) {
      this.charactersService.prevPage(this.prev)
        .subscribe(resp => {
          this.characters = resp.results;
          this.next = resp.info.next;
          this.prev = resp.info.prev;
        })
    }

    return
  }
}
