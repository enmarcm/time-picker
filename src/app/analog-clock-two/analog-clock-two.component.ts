import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'analog-clock-two',
  templateUrl: './analog-clock-two.component.html',
  styleUrls: ['./analog-clock-two.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AnalogClockTwoComponent implements OnInit, OnDestroy {
  @Input() customTime?: Date;

  secondRotation: number = 0;
  minuteRotation: number = 0;
  hourRotation: number = 0;

  private timer: any;

  ngOnInit(): void {
    const updateClock = () => {
      const currentTime = this.customTime ? new Date(this.customTime) : new Date();

      const seconds = currentTime.getSeconds() / 60;
      const minutes = (seconds + currentTime.getMinutes()) / 60;
      const hours = (minutes + currentTime.getHours()) / 12;

      this.secondRotation = seconds * 360;
      this.minuteRotation = minutes * 360;
      this.hourRotation = hours * 360;
    };

    updateClock();

    if (!this.customTime) {
      this.timer = setInterval(updateClock, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}