import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CoursePage } from './course.page';

import { CoursePageRoutingModule } from './course-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePageRoutingModule
  ],
  declarations: [CoursePage]
})
export class CoursePageModule {}
