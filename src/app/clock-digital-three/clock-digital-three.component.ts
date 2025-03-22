import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-digital-three',
  standalone: true,
  templateUrl: './clock-digital-three.component.html',
  styleUrls: ['./clock-digital-three.component.css'],
  imports: [CommonModule]
})
export class ClockDigitalThreeComponent implements OnInit {
  @Input() customTime?: Date; // Hora personalizada en formato Date
  currentTime: string = '';
  currentDate: string = '';

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    const timeString = now.toLocaleTimeString();
    this.currentTime = timeString;

    const day = ('0' + now.getDate()).slice(-2);
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const year = now.getFullYear();
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const weekDay = weekDays[now.getDay()];

    this.currentDate = `${year}-${month}-${day} ${weekDay}`;
  }
}