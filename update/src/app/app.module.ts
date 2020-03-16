import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './dashboard/manage/manage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './dashboard/manage/users/users.component';
import { ItemsComponent } from './dashboard/manage/items/items.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { AddItemComponent } from './dialogs/add-item/add-item.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { NewOrderComponent } from './new-order/new-order.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { MatChipsModule } from '@angular/material/chips';

//new
import * as firebase from 'firebase/app';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
//import 'firebase/auth';
//import 'firebase/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//firebase.initializeApp(environment.firebaseConfig);

import { DatePipe } from '@angular/common'





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ManageComponent,
    NavbarComponent,
    UsersComponent,
    ItemsComponent,
    AddUserComponent,
    ConfirmDialogComponent,
    AddItemComponent,
    NewOrderComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatListModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    DragDropModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, AddUserComponent, AddItemComponent]

})
export class AppModule { }