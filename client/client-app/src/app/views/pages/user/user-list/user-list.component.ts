import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/components/dialog/confirmation-dialog/confirmation-dialog.component';
import { UserService } from 'src/app/services/api/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  noResultsFound: boolean = false;
  filter: string = '';
  users: Array<User> = [];
  displayedColumns = [...Object.keys(new User()), 'actions']; //Get descriptors
  lottieConfig = {
    path: 'assets/lotties/not-found.json',
    renderer: 'canvas',
    loop: true
  };

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  getUsers() {
    let dataSource = this.users.filter(user => 
      user.name.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) > -1
      || user.email.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) > -1);
    this.noResultsFound = !dataSource.length;
    return dataSource;
  }

  deleteUser(user: User, rowIndex: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: `Do you confirm the deletion of user ${user.name}?`,
      content: `After done, this action cant be reverted. All data related to the user ${user.name} will be lost`
    };

    this.dialog.open(ConfirmationDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(event => event && this.userService.deleteUser(user).then(response => {
        if(response)
          this.users.splice(rowIndex, 1);
      }));
  }

  editUser(user: User) {
    console.log(user);
  }
}
