import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimePickerComponent, TimePickerType } from './time-picker/time-picker.component';
import { ClockDigitalSixComponent } from './clock-digital-six/clock-digital-six.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TimePickerComponent, ClockDigitalSixComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'time-picker';
  TimePickerType = TimePickerType;

}
