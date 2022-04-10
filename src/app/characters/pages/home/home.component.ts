import { Component, OnInit } from '@angular/core';

import { Character } from '../../interfaces/character.model';

import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show: boolean = true;
  loadData: boolean = true;
  error: boolean = false;
  next: string = '';
  prev: string | null = null;
  nameCharacter: string = '';
  characters: Character[] = [];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getAll()
      .subscribe(resp => {
        this.characters = resp.results;
        this.next = resp.info.next;
        this.prev = resp.info.prev;
        this.loadData = false;
      })
  }

  nextPage() {
    this.loadData = true;
    if(this.next !== null) {
      this.charactersService.nextPage(this.next)
        .subscribe(resp => {
          this.characters = resp.results;
          this.next = resp.info.next;
          this.prev = resp.info.prev;
          this.loadData = false;
        })
    }

    return
  }

  prevPage() {
    this.loadData = true;
    if(this.prev !== null) {
      this.charactersService.prevPage(this.prev)
        .subscribe(resp => {
          this.characters = resp.results;
          this.next = resp.info.next;
          this.prev = resp.info.prev;
          this.loadData = false;
        })
    }

    return
  }

  search( nameCharacter: string ) {
    this.error = false;
    this.nameCharacter = nameCharacter;

    this.charactersService.searchCharacter(this.nameCharacter)
      .subscribe((resp) => {
        this.characters = resp.results;
        this.next = resp.info.next;
        this.prev = resp.info.prev;
      },
      (err) => {
        this.error = true;
      })
  }
}
