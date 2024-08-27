import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class Dashboardcomponent implements OnInit {
  users:any = []; 

  constructor(private router:Router) {}
  
  
  ngOnInit() {

    let usersData = localStorage.getItem('users');
    this.users =  usersData ? JSON.parse(usersData) : [];
    console.log("iuser list am gett at list component is",this.users)
    console.log(this.router);
  }




  editUser(user:any){

  }

  deleteUser(User:any){

  }



  navigateToRegister(){
    this.router.navigate(['/register']);
  }
}