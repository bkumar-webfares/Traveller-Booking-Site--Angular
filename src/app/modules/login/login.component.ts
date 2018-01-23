import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  onSubmit(){
    console.log(this.loginForm);
  }
  constructor(fp : FormBuilder) {
    this.loginForm = fp.group({
      accountID : ['' ,[Validators.required]],
      email : ['' , Validators.required],
      password :['' , Validators.required],
    });
  } 

  ngOnInit() {
    $('#slides').superslides({
      animation: 'fade',
      pagination:false,
    });
  }
}
