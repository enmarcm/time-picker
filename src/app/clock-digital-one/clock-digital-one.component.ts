import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'clock-digital-one',
  templateUrl: './clock-digital-one.component.html',
  styleUrls: ['./clock-digital-one.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ClockDigitalOneComponent implements OnInit, OnDestroy, OnChanges {
  @Input() customTime?: Date;

  clockText: string = '00:00:00';
  is24HourFormat: boolean = true;
  private timer: any;

  ngOnInit(): void {
    this.updateClock();

    if (!this.customTime) {
      this.timer = setInterval(() => this.updateClock(), 1000);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customTime'] && changes['customTime'].currentValue) {
      this.updateClock();
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateClock(): void {
    const now: Date = this.customTime ? new Date(this.customTime) : new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let period = '';

    if (!this.is24HourFormat) {
      period = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12;
    }
    const hoursStr = String(hours).padStart(2, '0');
    this.clockText = `${hoursStr}:${minutes}:${seconds}${period}`;
  }

  toggleFormat(): void {
    this.is24HourFormat = !this.is24HourFormat;
    this.updateClock();
  }

  get switcherText(): string {
    return this.is24HourFormat
      ? 'Switch to 12-Hour Format'
      : 'Switch to 24-Hour Format';
  }
}
