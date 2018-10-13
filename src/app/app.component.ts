import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'We are rock!';

  public users = [
    {
      name: 'Vasya',
      age: 20
    },
    {
      name: 'Petiya',
      age: 25
    },
    {
      name: 'Anna',
      age: 18
    },
    {
      name: 'Kolya',
      age: 25
    },
    {
      name: 'Veronika',
      age: 21
    }
  ];

  public toggle = false;

  public constructor() {
    setTimeout(() => {
      this._changeTitle();
    }, 1000);
  }

  public clickMe() {
      this.title = this.toggle ? 'Kolya' : 'Petiya';
      this.toggle = !this.toggle;
  }

  public changeAge(event) {
    console.log(event);
  }

  private _changeTitle() {
    this.title = 'Super!!!';
  }
}
