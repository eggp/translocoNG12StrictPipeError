import { Component, OnInit } from '@angular/core';
import { Options1, Options2 } from './types';

@Component({
  selector: 'ng12transloco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  options1: Options1 | null = null;
  options2: Options2 | null = null;

  ngOnInit(): void {
    this.options1 = { some: 'test' };
    this.options2 = {
      some: { someKey: 'test' },
    };
  }
}
