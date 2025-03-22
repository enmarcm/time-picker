import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum TimePickerType {
  AnalogClock = 'analog-clock',
  AnalogClockTwo = 'analog-clock-two',
  AnalogClockThree = 'analog-clock-three',
  Casio = 'casio',
  ClockDigitalOne = 'clock-digital-one',
  ClockDigitalTwo = 'clock-digital-two',
  ClockDigitalThree = 'clock-digital-three',
  ClockDigitalFour = 'clock-digital-four',
  ClockDigitalFive = 'clock-digital-five',
  ClockDigitalSix = 'clock-digital-six'
}


import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { AnalogClockTwoComponent } from '../analog-clock-two/analog-clock-two.component';
import { AnalogClockThreeComponent } from '../analog-clock-three/analog-clock-three.component';
import { CasioComponent } from '../casio/casio.component';
import { ClockDigitalOneComponent } from '../clock-digital-one/clock-digital-one.component';
import { ClockDigitalTwoComponent } from '../clock-digital-two/clock-digital-two.component';
import { ClockDigitalThreeComponent } from '../clock-digital-three/clock-digital-three.component';
import { ClockDigitalFourComponent } from '../clock-digital-four/clock-digital-four.component';
import { ClockDigitalFiveComponent } from '../clock-digital-five/clock-digital-five.component';
import { ClockDigitalSixComponent } from '../clock-digital-six/clock-digital-six.component';

@Component({
  selector: 'time-picker',
  standalone: true,
  imports: [
    CommonModule,
    AnalogClockComponent,
    AnalogClockTwoComponent,
    AnalogClockThreeComponent,
    CasioComponent,
    ClockDigitalOneComponent,
    ClockDigitalTwoComponent,
    ClockDigitalThreeComponent,
    ClockDigitalFourComponent,
    ClockDigitalFiveComponent,
    ClockDigitalSixComponent
  ],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent {
  @Input() type: TimePickerType = TimePickerType.AnalogClock;
  @Input() customTime?: string | Date;

  get parsedCustomTime(): Date | undefined {
    return this.customTime ? new Date(this.customTime) : undefined;
  }

  TimePickerType = TimePickerType; 
}