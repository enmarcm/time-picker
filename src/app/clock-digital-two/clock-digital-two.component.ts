import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-digital-two',
  standalone: true,
  templateUrl: './clock-digital-two.component.html',
  styleUrls: ['./clock-digital-two.component.css'],
  imports: [CommonModule]
})
export class ClockDigitalTwoComponent implements OnInit {
  @Input() customTime?: Date; 
  currentTime: string = '';
  currentDate: string = '';

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 500);
  }

  updateClock(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ap = hours < 12 ? 'AM' : 'PM';

    const formattedHours = this.formatTime(hours > 12 ? hours - 12 : hours === 0 ? 12 : hours);
    const formattedMinutes = this.formatTime(minutes);
    const formattedSeconds = this.formatTime(seconds);

    this.currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ap}`;
    this.currentDate = this.formatDate(now);
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  formatDate(date: Date): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} ${month} ${year}`;
  }
}