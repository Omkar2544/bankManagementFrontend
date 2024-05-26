import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private loginService: LoginserviceService,private router:Router){
    
  }
  ngonInit(){
    window.location.reload();
  }
  userId=""
  password=""
  userShow=""
  dataToSend ={
    "userId":this.userId,
    "password":this.password
  }
  loginUser(){
    this.loginService.setUserId(this.userId);
    this.dataToSend ={
      "userId":this.userId,
      "password":this.password
    }
    this.loginService.loginUser(this.dataToSend).subscribe((data) =>{
      if(data) this.router.navigateByUrl('/otherdashboard');
      else this.userShow="tere login details galat hai bhai"
    })
  }
}
