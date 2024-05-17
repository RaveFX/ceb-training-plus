import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { ProgramListComponent } from './pages/program-list/program-list.component';
import { ProgramRequestDGMComponent } from './pages/program-request-dgm/program-request-dgm.component';
import { ProgramListDgmComponent } from './pages/program-list-dgm/program-list-dgm.component';
import { ProgramListConfirmDgmComponent } from './pages/program-list-dgm/program-list-confirm-dgm/program-list-confirm-dgm.component';
import { ApproveResultsDgmComponent } from './pages/approve-results-dgm/approve-results-dgm.component';
import { ApproveAllowanceDgmComponent } from './pages/approve-allowance-dgm/approve-allowance-dgm.component';
import { BlockHostelDgmComponent } from './pages/block-hostel-dgm/block-hostel-dgm.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AttendanceToComponent } from './pages/attendance-to/attendance-to.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dgm',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'workbench',
        component: WorkbenchComponent
      },
      {
        path: 'programlist',
        component: ProgramListDgmComponent
      },
      {
        path: 'programrequestdgm',
        component: ProgramRequestDGMComponent
      },
      {
        path: 'program/:id',
        component: ProgramListConfirmDgmComponent
      },
      {
        path: 'results',
        component: ApproveResultsDgmComponent
      },
      {
        path: 'allowance',
        component: ApproveAllowanceDgmComponent
      },
      {
        path: 'blockhostel',
        component: BlockHostelDgmComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'to',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'workbench',
        component: WorkbenchComponent
      },
      {
        path: 'programlist',
        component: ProgramListComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'attendance',
        component: AttendanceToComponent
      }
    ]
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
