import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { TableModule } from 'primeng/table';
import { ProgramListComponent } from './pages/program-list/program-list.component';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { heroCog, heroHome, heroClipboard, heroBriefcase, heroPencilSquare, heroXCircle } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { SublevelMenuComponent } from './layout/sidebar/sublevel-menu.component';
import { ProgramRequestDGMComponent } from './pages/program-request-dgm/program-request-dgm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    WorkbenchComponent,
    ProgramListComponent,
    SublevelMenuComponent,
    ProgramRequestDGMComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ToolbarModule,
    AvatarModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    TagModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
    MenuModule,
    PanelMenuModule,
    NgIconsModule.withIcons({ heroCog, heroHome, heroClipboard, heroBriefcase, heroPencilSquare, heroXCircle})


  ],
  providers: [
    provideClientHydration(), MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
