import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './other-dashboard.component.html',
  styleUrl: './other-dashboard.component.css'
})
export class OtherDashboardComponent {

  constructor(private loginService: LoginserviceService,private router:Router){}
  userId = ""
  dataToShow=""
  getBalance(){
    this.userId = this.loginService.getUserId();
    this.loginService.getBalance( this.userId ).subscribe(data =>{
      this.dataToShow = "Your current Balance is "+data.balance;
    }
    )
  }

  logout(){
    this.router.navigateByUrl('/login')
  }
  
   
}
