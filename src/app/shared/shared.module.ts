import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsModule } from '../gifs/gifs.module';

import { GifsService } from '../gifs/services/gifs.service';

import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    GifsModule
  ]
})
export class SharedModule { }
