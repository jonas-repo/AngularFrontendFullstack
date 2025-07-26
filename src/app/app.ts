import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { Counter } from './counter/counter';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected title = 'Hello world angular from component!';
  subtitle = 'State session counter'
  users = ['Peter','Mary','Jhon','Andrei'];
  visible: boolean = false;
  counter: number = 0;

  ngOnInit(): void {
    this.counter = 
   parseInt(sessionStorage.getItem('counter')!) || 0;
  } 
  setVisible(): void {
    this.visible = this.visible? false : true;
  }

  setCounter(counter: number):void{
    this.counter = counter;
  }
}
