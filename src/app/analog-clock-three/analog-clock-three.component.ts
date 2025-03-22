import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'analog-clock-three',
  templateUrl: './analog-clock-three.component.html',
  styleUrls: ['./analog-clock-three.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AnalogClockThreeComponent implements OnInit, OnDestroy {
  @Input() customTime?: Date;

  hrRotation: number = 0;
  mnRotation: number = 0;
  scRotation: number = 0;

  digitalHours: string = '';
  digitalMinutes: string = '';
  digitalSeconds: string = '';
  digitalAmPm: string = '';

  private timer: any;

  ngOnInit(): void {
    const updateClock = () => {
      const currentTime = this.customTime ? new Date(this.customTime) : new Date();

      const hh = currentTime.getHours() * 30;
      const mm = currentTime.getMinutes() * 6;
      const ss = currentTime.getSeconds() * 6;

      this.hrRotation = hh + mm / 12;
      this.mnRotation = mm;
      this.scRotation = ss;

      let h = currentTime.getHours();
      const m = currentTime.getMinutes();
      const s = currentTime.getSeconds();
      const am = h >= 12 ? 'PM' : 'AM';
      if (h > 12) h -= 12;

      this.digitalHours = (h < 10 ? '0' + h : h.toString()) + ':';
      this.digitalMinutes = (m < 10 ? '0' + m : m.toString()) + ':';
      this.digitalSeconds = s < 10 ? '0' + s : s.toString();
      this.digitalAmPm = am;
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