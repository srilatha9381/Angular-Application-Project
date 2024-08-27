import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
loginForm:any
user:any
  

constructor( private fb:FormBuilder,private router:Router){
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}


ngOnInit(){
      const storedUsers = localStorage.getItem('users');
      const existingUsers = storedUsers ? JSON.parse(storedUsers) : [];
      this.user = existingUsers
}







onSubmit(){

  if(this.loginForm.valid){
    const providedUsername =this.loginForm.get('username').value ; 
    const providedPassword = this.loginForm.get('password').value ;
    
    const matchingUser = this.user.find((user: { username: any; password: any; }) => user.username === providedUsername && user.password === providedPassword);   
       if (matchingUser) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
      }).then(() => {
        this.router.navigate(['/dashboard',{providedUsername,providedPassword}]);
    });;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Please enter the valid Credentials and try again.',
      });
    }
  }

;''
  if (this.loginForm.invalid) {
    return;
  }

 
}


navigateToRegister() {
  this.router.navigate(['/register']);
}

}