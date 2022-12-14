import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { UserResponse } from 'src/app/models/user-response';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersResponse!: UserResponse[];


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsersResponse();
  }

  private getUsersResponse(){
    this.employeeService.getUserList().subscribe(data => {
      this.usersResponse = data;
    });
    
  }

  updateUser(isActive: boolean){
    this.router.navigate(['users/update-user', isActive]);
  }
}
