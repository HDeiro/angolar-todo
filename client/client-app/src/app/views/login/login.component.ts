import { Component, OnInit } from '@angular/core';
import { FormErrorMatcher } from 'src/app/utilities/form-error-matcher.util';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/api/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo = new User();
  passwordRecoveryModeIsEnabled = false;
  passwordIsHidden = true;
  matcher = new FormErrorMatcher();
  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private authService: AuthService,
    private titleService: Title,
  ) { 
    titleService.setTitle('AnGolar | Login')
  }

  ngOnInit() {
  }

}
