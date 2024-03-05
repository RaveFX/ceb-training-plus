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
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { heroCog, heroHome, heroClipboard, heroBriefcase, heroPencilSquare, heroXCircle } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { SublevelMenuComponent } from './layout/sidebar/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    SublevelMenuComponent
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
    MenuModule,
    PanelMenuModule,
    NgIconsModule.withIcons({ heroCog, heroHome, heroClipboard, heroBriefcase, heroPencilSquare, heroXCircle})


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
