import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'clock-digital-one',
  templateUrl: './clock-digital-one.component.html',
  styleUrls: ['./clock-digital-one.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ClockDigitalOneComponent implements OnInit, OnDestroy {
  // Si se pasa una fecha/hora específica (por ejemplo: new Date(2025, 2, 21, 15, 30, 0)),
  // se mostrará esa hora de forma estática; de lo contrario, se usará la hora actual.
  @Input() customTime?: Date;

  clockText: string = '00:00:00';
  is24HourFormat: boolean = true;
  private timer: any;

  ngOnInit(): void {
    this.updateClock();
    // Actualizamos cada segundo solo si no se pasa una hora fija
    if (!this.customTime) {
      this.timer = setInterval(() => this.updateClock(), 1000);
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
      hours = hours % 12 || 12; // Convierte 0 a 12
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
