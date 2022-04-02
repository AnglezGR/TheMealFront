import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataRemember: any;

  constructor(private authSvc: AuthService, private route: Router) { }

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl(''),
  });

  ngOnInit() {

    this.dataRemember = localStorage.getItem('userDataRemember');
    this.dataRemember = JSON.parse(this.dataRemember)
    if (this.dataRemember) {
      this.loginForm.setValue({
        user: this.dataRemember.user,
        password: this.dataRemember.password,
        remember: this.dataRemember.remember
      });
    }
  }

  onLogin(form: UserI) {
    const login = this.authSvc.loginByEmail(form)
    if (login) {
      const dataUs = {
        user: form.user,
        password: form.password,
        name: 'Angel',
        lastName: 'Gonzalez',
        email: 'angel_gonzalez96@hotmail.com',
        displayName: 'Angel González',
        photoURL: 'photoURL',
        uid: '12345',
        phoneNumber: '6681822133',
        remember: form.remember
      }
      localStorage.setItem('userData', JSON.stringify(dataUs));
      if (form.remember)
        localStorage.setItem('userDataRemember', JSON.stringify(dataUs));
      else
        localStorage.removeItem('userDataRemember');

      this.route.navigate(['/bienvenida']);
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contreseña incorrectos!',
      })
      console.log('Usuario o contraseña incorrectos')
    }
  }
}
