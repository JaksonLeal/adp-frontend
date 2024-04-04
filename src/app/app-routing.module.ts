import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminGuard } from './services/admin.guard';
import { UserComponent } from './pages/user/user.component';
import { userGuard } from './services/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [userGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
