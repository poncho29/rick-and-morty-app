import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { InfoCharacterComponent } from './pages/info-character/info-character.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent,
    InfoCharacterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class CharactersModule { }
