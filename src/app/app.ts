import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { Counter } from './counter/counter';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Hello world angular from component!';
  users = ['Peter','Mary','Jhon','Andrei'];
  visible: boolean = false;
  setVisible(): void {
    this.visible = this.visible? false : true;
  }
}
