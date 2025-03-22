import { Component } from '@angular/core';
import { TimePickerComponent, TimePickerType } from '../../time-picker/time-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [TimePickerComponent, CommonModule, FormsModule]
})
export class MainComponent {
 TimePickerType = TimePickerType;
}