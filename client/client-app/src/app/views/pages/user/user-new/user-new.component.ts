import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormControl, Validators } from '@angular/forms';
import { FormErrorMatcher } from 'src/app/utilities/form-error-matcher.util';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/api/user/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  passwordIsHidden = true;
  userModel: User;
  matcher = new FormErrorMatcher();
  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.userModel = id ? this.userService.getUser(id) : new User();
  }

  saveUser() {
    console.log(this.userModel);
  }
}
