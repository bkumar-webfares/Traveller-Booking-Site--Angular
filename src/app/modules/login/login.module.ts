import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: LoginComponent },
        ]),
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    providers: [
    ],
})
export class LoginModule { }