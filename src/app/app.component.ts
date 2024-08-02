import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receipes';
  receipes: any[] = []
  constructor()
  {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => (console.log(data),this.receipes = data.recipes));
  }

}
