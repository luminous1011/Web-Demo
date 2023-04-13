import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FormControl, FormGroup } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {

  form: FormGroup = new FormGroup({
    memberId: new FormControl(2222),
    fullName: new FormControl(),
    birth: new FormControl(),
    gender: new FormControl('Male'),
    membershipType: new FormControl('Basic'),
    membershipStart: new FormControl(),
    contactNumber: new FormControl(),
    addr: new FormControl(),
    email: new FormControl(),
    emergencyContactNumber: new FormControl(),
    condition: new FormControl(),
  });
}
