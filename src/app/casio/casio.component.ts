import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'casio-clock',
  standalone: true,
  templateUrl: './casio.component.html',
  styleUrls: ['./casio.component.css'],
  imports: [CommonModule]
})
export class CasioComponent implements OnInit {
  @Input() customTime?: Date;

  WEEKDAY = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  weekday: string = "--";
  day: string = "--";
  hours: string = "--";
  minutes: string = "--";
  seconds: string = "--";

  ngOnInit(): void {
    const updateClock = () => {
      const date = this.customTime ? new Date(this.customTime) : new Date();

      this.day = String(date.getDate());
      this.weekday = this.WEEKDAY[date.getDay()];
      this.hours = String(date.getHours()).padStart(2, "0");
      this.minutes = String(date.getMinutes()).padStart(2, "0");
      this.seconds = String(date.getSeconds()).padStart(2, "0");
    };

    updateClock();

    if (!this.customTime) {
      setInterval(updateClock, 1000);
    }
  }
}