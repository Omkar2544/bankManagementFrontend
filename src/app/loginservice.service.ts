import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }


  userId=""
  setUserId(userId:string){
    this.userId =userId;
  }
  getUserId(){
    return this.userId;
  }

  private url1 = 'http://localhost:8080/omkar/verifyonline';
  loginUser(dataToSend: any) : Observable <any> {
    return this.http.post<any>(this.url1,dataToSend);
  }

  private url2 = 'http://localhost:8080/omkar/getbalanceonline/';
 getBalance(dataToSend: any) : Observable <any> {
    return this.http.get<any>(this.url2+dataToSend);
  }

  private url3 = 'http://localhost:8080/omkar/fundtransfer';
 transferFunds(dataToSend: any) : Observable <any> {
    return this.http.post<any>(this.url3,dataToSend);
  }


}
