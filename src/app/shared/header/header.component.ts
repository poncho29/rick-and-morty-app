import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Character } from 'src/app/characters/interfaces/character.model';

import { CharactersService } from 'src/app/characters/services/characters/characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nameCharacter: string = '';
  // charactersSugeridos: Character[] = [];
  // debouncer: Subject<string> = new Subject();

  @Input() show: boolean = false;
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    // this.debouncer
    //   .pipe(
    //     debounceTime(300)
    //   )
    //   .subscribe(valor => {
    //     this.suggestions(valor);
    //   })
  }

  search() {
    this.onEnter.emit(this.nameCharacter);
  }

  // keyPress() {
  //   this.debouncer.next(this.nameCharacter);
  // }

  // Autocompleado
  // suggestions(nameCharacter: string) {
  //   this.charactersService.searchCharacter(nameCharacter)
  //     .subscribe(resp => {
  //       this.charactersSugeridos = resp.results.splice(0, 3);
  //       console.log(this.charactersSugeridos)
  //     })
  // }
}
