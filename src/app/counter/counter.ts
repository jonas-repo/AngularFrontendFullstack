import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnInit {
counter: number = 0;

@Input() title!:string;

@Output() counterEmmit : EventEmitter<number> = new EventEmitter();

 ngOnInit(): void {
   this.counter = 
   parseInt(sessionStorage.getItem('counter')!) || 0;
 }
 
 setCounter(): void{
  this.counter = this.counter +1;
  sessionStorage.setItem('counter', this.counter.toString());
  this.counterEmmit.emit(this.counter);
 }
}
