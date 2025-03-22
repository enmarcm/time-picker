import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'casio-clock',
  standalone: true,
  templateUrl: './casio.component.html',
  styleUrls: ['./casio.component.css'],
  imports: [CommonModule]
})
export class CasioComponent implements OnInit, OnDestroy, OnChanges {
  @Input() customTime?: Date;

  WEEKDAY = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  weekday: string = "--";
  day: string = "--";
  hours: string = "--";
  minutes: string = "--";
  seconds: string = "--";

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

  private updateClock(): void {
    const date = this.customTime ? new Date(this.customTime) : new Date();

    this.day = String(date.getDate());
    this.weekday = this.WEEKDAY[date.getDay()];
    this.hours = String(date.getHours()).padStart(2, "0");
    this.minutes = String(date.getMinutes()).padStart(2, "0");
    this.seconds = String(date.getSeconds()).padStart(2, "0");
  }
}