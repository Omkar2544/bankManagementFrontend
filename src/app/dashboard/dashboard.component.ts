import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private loginService: LoginserviceService,private router:Router){}
  userId = ""
  accountNumber = ""
  amount = ""

  dataTosend={
    "userId":this.userId,
    "accountNumber":this.accountNumber,
    "amount":this.amount
  }
  transferFunds(){
    this.dataTosend={
      "userId":this.loginService.getUserId(),
      "accountNumber":this.accountNumber,
      "amount":this.amount
    }

    this.loginService.transferFunds(this.dataTosend).subscribe(data=>{
      alert('Fund transfer successful and Your current balance is '+data.balance);
      this.router.navigateByUrl('/otherdashboard');
    })
  }

}
