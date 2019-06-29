import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DatabaseService } from '../database.service';



@Component({
  selector: 't-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error: string
  
  constructor(private userData : DatabaseService, private router: Router) {
     
  }

 
Login(form){
  this.userData.Login(form.form.controls.mail.value, form.form.controls.password.value)
  .subscribe(
    data => {
      if (data){
        this.navigate('inicio/store');
      }
      else{
        this.error = 'Login Fallo!'
      }
    }

  )

}
navigate(route) {
  this.router.navigateByUrl(route);
}

ngOnInit() {
  
}

}

