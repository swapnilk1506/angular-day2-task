import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../capitalize-pipe';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees = [
    {
      name: 'Swapnil',
      role: 'FullStack Developer',
    },
    {
      name: 'Rahul',
      role: 'Angular Developer',
    },
    {
      name: 'Amit',
      role: 'Software Developer',
    },
    {
      name: 'Priya',
      role: 'Frontend Developer',
    }
  ];
  showEmployees = true;//This boolean will be used with *ngIf.
}
