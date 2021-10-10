import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Capitan America';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percentage: number = 0.2525;
  salary: number = 1234.5;
  hero = {
    name: 'Steve Rogers',
    key: 'Capitain American',
    address: {
      street: 'street one',
    },
  };
  prom = new Promise<string>((resolve) => {
    setTimeout(() => {
      return resolve('Fin de la data');
    }, 4000);
  });
  now: Date = new Date();

  showName: boolean = false;

  showPass() {
    this.showName = !this.showName;
  }
}
