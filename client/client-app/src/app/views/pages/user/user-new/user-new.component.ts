import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  passwordIsHidden = true;
  userModel: User;

  constructor() { }

  ngOnInit() {
    this.userModel = new User();
  }

  saveUser() {
    console.log(this.userModel);
  }
}
