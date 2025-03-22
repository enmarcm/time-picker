import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-digital-five',
  standalone: true,
  templateUrl: './clock-digital-five.component.html',
  styleUrls: ['./clock-digital-five.component.css'],
  imports: [CommonModule]
})
export class ClockDigitalFiveComponent implements OnInit {
  @Input() customTime?: Date; 
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  format: string = 'AM';
  activeDayIndex: number = 0;

  weekDays: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    this.activeDayIndex = now.getDay();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.format = hours >= 12 ? 'PM' : 'AM';
    hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

    this.hours = this.pad(hours);
    this.minutes = this.pad(minutes);
    this.seconds = this.pad(seconds);
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}