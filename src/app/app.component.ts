import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. A' },
    { id: 12, name: 'Mr. B' },
    { id: 13, name: 'Mr. C' },
    { id: 14, name: 'Mr. D' },
    { id: 15, name: 'Mr. E' },
    { id: 16, name: 'Mr. F' },
    { id: 17, name: 'Mr. G' },
    { id: 18, name: 'Mr. H' },
    { id: 19, name: 'Mr. I' },
    { id: 20, name: 'Mr. J' }
  ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: `<h1>{{title}}</h1><h3>{{hero.name}} details</h3>`
  template:
  `<h1>{{title}}</h1>
   <h2>The Heroes</h2>
   <ul class = "heroes">
    <li *ngFor = "let hero of heroes" (click)="onSelect(hero)">
      <span class="badge"> {{hero.id}} </span>{{hero.name}}
    </li>
   </ul>
   <h2>{{selectedHero.name}} details</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
</div>
  `
})
export class AppComponent {
  title = 'Tour of Heores';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
};
