import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    firstName: string = 'Randeep';
    lastName: string = 'Singh';
    gender: string = 'Male';
    age: number = 31;
}
