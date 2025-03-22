import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TimePickerType } from '../../time-picker/time-picker.component';
import { TimePickerComponent } from '../../time-picker/time-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    TimePickerComponent,
    NavbarComponent,
  ],
})
export class MainComponent {
  options: TimePickerType[] = Object.values(TimePickerType) as TimePickerType[];
  private _selectedOption: TimePickerType = TimePickerType.ClockDigitalSix;

  selectedHour: number = 12;
  selectedMinute: number = 0;
  selectedSecond: number = 0;
  selectedDate: Date = new Date(); 
  intervalId: any;
  timePickerKey: number = 0; 
  TimePickerType = TimePickerType;

  
  get selectedOption(): TimePickerType {
    return this._selectedOption;
  }

  set selectedOption(value: TimePickerType) {
    this._selectedOption = value;
    this.resetClock(); 
  }

  getCustomTime(): Date {
    return new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth(),
      this.selectedDate.getDate(),
      this.selectedHour,
      this.selectedMinute,
      this.selectedSecond
    );
  }

  onSliderChange(event: any): void {
    clearInterval(this.intervalId);
    const totalSeconds = +event.target.value;
    this.selectedHour = Math.floor(totalSeconds / 3600);
    this.selectedMinute = Math.floor((totalSeconds % 3600) / 60);
    this.selectedSecond = totalSeconds % 60;
    this.timePickerKey++; 
    this.startClock();
  }

  onDateChange(date: Date): void {
    this.selectedDate = date; 
    this.timePickerKey++; 
  }

  startClock(): void {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.selectedSecond++;
      if (this.selectedSecond >= 60) {
        this.selectedSecond = 0;
        this.selectedMinute++;
      }
      if (this.selectedMinute >= 60) {
        this.selectedMinute = 0;
        this.selectedHour = (this.selectedHour + 1) % 24;
      }
    }, 1000);
  }

  resetClock(): void {
    clearInterval(this.intervalId);
    const now = new Date();
    this.selectedDate = now; 
    this.selectedHour = now.getHours();
    this.selectedMinute = now.getMinutes();
    this.selectedSecond = now.getSeconds();
    this.timePickerKey++; 
    this.startClock();
  }

  getTotalSeconds(): number {
    return this.selectedHour * 3600 + this.selectedMinute * 60 + this.selectedSecond;
  }

  isDatePickerEnabled(): boolean {
    
    return [
      TimePickerType.Casio,
      TimePickerType.ClockDigitalTwo,
      TimePickerType.ClockDigitalThree,
      TimePickerType.ClockDigitalFive,
      TimePickerType.ClockDigitalSix,
    ].includes(this.selectedOption);
  }
}