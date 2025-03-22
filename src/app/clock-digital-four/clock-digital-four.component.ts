import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-digital-four',
  standalone: true,
  templateUrl: './clock-digital-four.component.html',
  styleUrls: ['./clock-digital-four.component.css'],
  imports: [CommonModule],
})
export class ClockDigitalFourComponent implements OnInit {
  @Input() customTime?: Date;
  hour: string = '00';
  minute: string = '00';
  second: string = '00';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = this.customTime ? new Date(this.customTime) : new Date();

    this.hour = this.pad(now.getHours(), 2);
    this.minute = this.pad(now.getMinutes(), 2);
    this.second = this.pad(now.getSeconds(), 2);
  }

  pad(num: number, size: number): string {
    return num.toString().padStart(size, '0');
  }
}