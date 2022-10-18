import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';
import { EmployeeService } from '../employee.service';
import { UserResponse } from '../models/user-response';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  username!: string;
  user: UserResponse = new UserResponse();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];

    this.employeeService.updateUserActivationByUsername(this.username).subscribe(data => {
      this.user = data;
    },error => console.log(error));
  }

  onSubmit(){
    /*console.log(this.user);
    this.saveUser();*/
  }

}
