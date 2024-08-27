import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, Validators,ReactiveFormsModule, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  providers:[]
})
export class RegistrationComponent {
  registerForm: FormGroup | any;
  submitted = false;



  constructor( private fb:FormBuilder,private router:Router){}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, this.matchValues('email')]]

    });

  }

  matchValues(matchTo: string): (AbstractControl: any) => { [key: string]: boolean } | null {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      return control.value === control.parent?.get(matchTo)?.value ? null : { isMatching: true };
    };
  }





  onRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    if(this.registerForm.valid){
      const storedUsers = localStorage.getItem('users');
      const existingUsers = storedUsers ? JSON.parse(storedUsers) : [];
      existingUsers.push(this.registerForm.value);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      Swal.fire({
        icon: 'success',
        title: 'Regestation Successful',
      }).then(() => {
        this.router.navigate(['/dashboard']);
    });;
    }

 
  }

  onClear() {
    this.registerForm.reset();
    this.submitted = false;

  }


  navigateToLogin(){
    this.router.navigate(['/dashboard']);
  }

}