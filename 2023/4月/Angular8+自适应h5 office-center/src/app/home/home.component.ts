import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent  {

  constructor() { }
  arr = [1, 2, 3, 4];
  array = [1, 2, 3, 4];
  dotPosition = 'left';
  dotPosition2 = 'bottom';
}
