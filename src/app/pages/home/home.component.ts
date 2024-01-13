import { Component, OnInit, TrackByFunction, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InfiniteScrollModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

  characters: Array<any> = []
  nextUrl: string = '';
  private characterService = inject(CharacterService)

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results                
        this.nextUrl = response.info.next
      }
    })
  }

  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onScroll() {
    this.characterService.getCharacters(this.nextUrl).subscribe({
      next: (response) => {

        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next
          Array.from(response.results).forEach((element) => {
            this.characters = [...this.characters, element]
            console.log(this.characters)
          })
        }

      }
    })
  }  

}
