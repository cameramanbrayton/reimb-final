import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path: '', component: LoginUserComponent
  },
  {
    path: 'users', component: UserListComponent
  },
  {
    path: 'users/create-user', component: CreateUserComponent
  },
  {
    path: 'users/update-user/:{username}Activation', component: UpdateUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
