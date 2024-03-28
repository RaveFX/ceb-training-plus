// import { NgModule } from '@angular/core';
// import {
//   BrowserModule,
//   provideClientHydration,
// } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { HomeComponent } from './components/home/home.component';
// import { CardModule } from 'primeng/card';
// import { InputTextModule } from 'primeng/inputtext';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { AvatarGroupModule } from 'primeng/avatargroup';
// import { LayoutComponent } from './layout/layout.component';
// import { ToolbarModule } from 'primeng/toolbar';
// import { AvatarModule } from 'primeng/avatar';
// import { HeaderComponent } from './layout/header/header.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';
// import { SidebarComponent } from './layout/sidebar/sidebar.component';
// import { WorkbenchComponent } from './pages/workbench/workbench.component';
// import { TableModule } from 'primeng/table';
// import { ProgramListComponent } from './pages/program-list/program-list.component';
// import { TagModule } from 'primeng/tag';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DropdownModule } from 'primeng/dropdown';
// import { MenuModule } from 'primeng/menu';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import {
//   heroTrash
// } from '@ng-icons/heroicons/outline';
// import { heroCog, heroHome, heroClipboard, heroBriefcase, heroPencilSquare, 
//         heroXCircle, heroChevronLeft, heroChevronDown,heroChevronUp, heroChevronRight, 
//         heroQueueList, heroUserPlus, heroListBullet, heroCheckBadge, 
//         heroBuildingOffice2, heroNoSymbol, heroBuildingOffice} from '@ng-icons/heroicons/outline';
// import { NgIconsModule } from '@ng-icons/core';
// import { SublevelMenuComponent } from './layout/sidebar/sublevel-menu.component';
// import { ProgramRequestDGMComponent } from './pages/program-request-dgm/program-request-dgm.component';
// import { BlockHostelDgmComponent } from './pages/block-hostel-dgm/block-hostel-dgm.component';
// import { ProgramListDgmComponent } from './pages/program-list-dgm/program-list-dgm.component';
// import { TabViewModule } from 'primeng/tabview';
// import { ProgramListConfirmDgmComponent } from './pages/program-list-dgm/program-list-confirm-dgm/program-list-confirm-dgm.component';
// import { DialogModule } from 'primeng/dialog';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { ApproveResultsDgmComponent } from './pages/approve-results-dgm/approve-results-dgm.component';
// import { ApproveAllowanceDgmComponent } from './pages/approve-allowance-dgm/approve-allowance-dgm.component';
// import { AccordionModule } from 'primeng/accordion';
// import { ChipModule } from 'primeng/chip';
// import { ContentComponent } from './pages/block-hostel-dgm/content/content.component';
// import { BlockconfirmComponent } from './pages/block-hostel-dgm/blockconfirm/blockconfirm.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     HomeComponent,
//     LayoutComponent,
//     HeaderComponent,
//     SidebarComponent,
//     WorkbenchComponent,
//     ProgramListComponent,
//     SublevelMenuComponent,
//     ProgramRequestDGMComponent,
//     BlockHostelDgmComponent,
//     ProgramListDgmComponent,
//     ContentComponent,
//     ProgramListConfirmDgmComponent,
//     ApproveResultsDgmComponent,
//     ApproveAllowanceDgmComponent,
//     ContentComponent,
//     BlockconfirmComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     CardModule,
//     ToolbarModule,
//     AvatarModule,
//     InputTextModule,
//     ReactiveFormsModule,
//     ButtonModule,
//     AvatarGroupModule,
//     AvatarModule,
//     HttpClientModule,
//     ToastModule,
//     BrowserAnimationsModule,
//     TableModule,
//     TagModule,
//     MultiSelectModule,
//     FormsModule,
//     DropdownModule,
//     MenuModule,
//     PanelMenuModule,
//     TabViewModule,
//     DialogModule,
//     InputTextareaModule,
//     AccordionModule,
//     ChipModule,
//     NgIconsModule.withIcons({
//       heroCog,
//       heroHome,
//       heroClipboard,
//       heroBriefcase,
//       heroPencilSquare,
//       heroXCircle,
//       heroChevronLeft,
//       heroChevronDown,
//       heroChevronUp,
//       heroChevronRight,
//       heroQueueList,
//       heroUserPlus,
//       heroListBullet,
//       heroCheckBadge,
//       heroBuildingOffice2,
//       heroNoSymbol,
//       heroBuildingOffice,
//       heroTrash
//     }),
//     NgIconsModule.withIcons({ heroCog, heroHome, heroClipboard, heroBriefcase, heroPencilSquare, 
//       heroXCircle, heroChevronLeft, heroChevronDown, heroChevronUp, heroChevronRight, 
//       heroQueueList, heroUserPlus, heroListBullet, heroCheckBadge, heroBuildingOffice2, heroNoSymbol, heroBuildingOffice}),
//       DialogModule,
//       ChipModule,
//       InputTextareaModule

//   ],
//   providers: [provideClientHydration(), MessageService],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
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
import {
  heroCog,
  heroHome,
  heroClipboard,
  heroBriefcase,
  heroPencilSquare,
  heroXCircle,
  heroChevronLeft,
  heroChevronDown,
  heroChevronUp,
  heroChevronRight,
  heroQueueList,
  heroUserPlus,
  heroListBullet,
  heroCheckBadge,
  heroBuildingOffice2,
  heroNoSymbol,
  heroBuildingOffice,
  heroTrash
} from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { SublevelMenuComponent } from './layout/sidebar/sublevel-menu.component';
import { ProgramRequestDGMComponent } from './pages/program-request-dgm/program-request-dgm.component';
import { BlockHostelDgmComponent } from './pages/block-hostel-dgm/block-hostel-dgm.component';
import { ProgramListDgmComponent } from './pages/program-list-dgm/program-list-dgm.component';
import { TabViewModule } from 'primeng/tabview';
import { ContentComponent } from './pages/program-list-dgm/content/content.component';
import { ProgramListConfirmDgmComponent } from './pages/program-list-dgm/program-list-confirm-dgm/program-list-confirm-dgm.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ApproveResultsDgmComponent } from './pages/approve-results-dgm/approve-results-dgm.component';
import { ApproveAllowanceDgmComponent } from './pages/approve-allowance-dgm/approve-allowance-dgm.component';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';

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
    BlockHostelDgmComponent,
    ProgramListDgmComponent,
    ContentComponent,
    ProgramListConfirmDgmComponent,
    ApproveResultsDgmComponent,
    ApproveAllowanceDgmComponent,
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
    TabViewModule,
    DialogModule,
    InputTextareaModule,
    AccordionModule,
    ChipModule,
    NgIconsModule.withIcons({
      heroCog,
      heroHome,
      heroClipboard,
      heroBriefcase,
      heroPencilSquare,
      heroXCircle,
      heroChevronLeft,
      heroChevronDown,
      heroChevronUp,
      heroChevronRight,
      heroQueueList,
      heroUserPlus,
      heroListBullet,
      heroCheckBadge,
      heroBuildingOffice2,
      heroNoSymbol,
      heroBuildingOffice,
      heroTrash
    }),
  ],
  providers: [provideClientHydration(), MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

