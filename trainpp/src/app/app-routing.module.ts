import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { ProgramListComponent } from './pages/program-list/program-list.component';
import { ProgramRequestDGMComponent } from './pages/program-request-dgm/program-request-dgm.component';

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
        path: 'programrequestdgm',
        component: ProgramRequestDGMComponent
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
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
