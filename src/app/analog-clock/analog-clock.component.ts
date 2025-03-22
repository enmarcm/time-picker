import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AnalogClockComponent implements OnInit {
  @Input() customTime?: Date; 
  secondRotation: number = 0;
  minuteRotation: number = 0;
  hourRotation: number = 0;

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    this.secondRotation = seconds * 6; 
    this.minuteRotation = minutes * 6 + seconds / 10; 
    this.hourRotation = (hours % 12) * 30 + minutes / 2; 
  }
}