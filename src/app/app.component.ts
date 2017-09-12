// Root component 
import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `<div>
                        <h1>{{getFullName()}}</h1>
                        <my-employee></my-employee>
                        <button [disabled]='isDisabled'>Click Me!</button>
                  </div>`
})

export class AppComponent {
    pageHeader: string = 'Employee Details';
    isDisabled: boolean = false;
    firstName: string = 'Randeep';
    lastName: string = 'Singh';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
