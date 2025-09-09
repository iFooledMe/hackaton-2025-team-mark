import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bomb-app');

    roundStarted: boolean = false
  boooom: boolean = false;

  onClick(): void {
    if (!this.roundStarted) this.roundStarted = true

    console.log(this.getRandomInt());
    // this.bombHtttpService.postRegistration().subscribe((response) => {
    //   console.log(response);
    // });

    setTimeout(() => {
      this.boooom = true
    }, this.getRandomInt() * 1000);


  }

  getRandomInt(): number {
    const min = 3;
    const max = 11;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
