import { AfterViewInit, Component, inject } from '@angular/core';
import { CharacterService } from '../../shared/services/character.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardComponent } from '../../shared/components/card/card.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InfiniteScrollModule, CardComponent, NavbarComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements AfterViewInit {

  characters: Array<any> = []
  searchedResults: Array<any> = []
  nextUrl: string = '';
  flag: boolean = true;
  private characterService = inject(CharacterService)

  ngAfterViewInit() {
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
        this.searchedResults = this.characters;
        this.nextUrl = response.info.next;
      }
    })
  }


  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getDataFromChild(keyword: string) {
    this.search(keyword);
  }

  search(keyword: string): void {
    
    if (keyword.trim() === '') {
      this.flag = true;
      this.searchedResults = [...this.characters];

    } else {
      this.flag = false;
      this.searchedResults = this.characters.filter(character =>
        character.name.toLowerCase().includes(keyword.toLowerCase())
      );

    }
  }


  onScroll() {
    if (this.flag) {
      if (this.nextUrl) {
        this.characterService.getCharacters(this.nextUrl).subscribe({
          next: (response) => {
            this.nextUrl = response.info.next;
            this.characters = [...this.characters, ...response.results];
            this.searchedResults = this.characters;
          }
        });
      }
    }
    
  }

}
