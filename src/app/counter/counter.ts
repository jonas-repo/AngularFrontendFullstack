import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnInit {
counter: number = 0;

@Input() title!:string;

 ngOnInit(): void {
   this.counter = 
   parseInt(sessionStorage.getItem('counter')!) || 0;
 }
 
 setCounter(): void{
  this.counter = this.counter +1;
  sessionStorage.setItem('counter', this.counter.toString());
 }
}
