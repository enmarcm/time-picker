import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AnalogClockComponent implements OnInit, OnChanges {
  @Input() customTime?: Date; 
  secondRotation: number = 0;
  minuteRotation: number = 0;
  hourRotation: number = 0;

  private intervalId: any;

  ngOnInit(): void {
    this.updateClock();
    this.startClock();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customTime'] && changes['customTime'].currentValue) {
      this.updateClock();
    }
  }

  startClock(): void {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    
    this.secondRotation = seconds * 6; 
    this.minuteRotation = minutes * 6 + seconds * 0.1; 
    this.hourRotation = (hours % 12) * 30 + minutes * 0.5; 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }
}