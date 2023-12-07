import { Component } from '@angular/core';
import { LoginService } from '../Services/http-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  data : any;

  constructor(private _loginService: LoginService) {
    this.data = 34;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let a= 10;
     this._loginService.getData().subscribe((res) => {
      this.data = res;
     } , (err) => {
      console.log(err);
     }
     );
  }
}
