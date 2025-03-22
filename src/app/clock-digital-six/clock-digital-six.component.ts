import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-digital-six',
  templateUrl: './clock-digital-six.component.html',
  styleUrls: ['./clock-digital-six.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ClockDigitalSixComponent implements OnInit {
  @Input() customTime?: Date;
  currentTime: string = '';
  currentDate: string = '';

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    const hours = this.formatTime(now.getHours());
    const minutes = this.formatTime(now.getMinutes());
    const seconds = this.formatTime(now.getSeconds());
    this.currentTime = `${hours}:${minutes}:${seconds}`;

    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const date = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    this.currentDate = `${day}, ${date}`;
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}