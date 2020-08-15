import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectSearchComponent } from './mat-select-search/mat-select-search.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ MatSelectSearchComponent ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ MatSelectSearchComponent ]
})
export class ToolsModule { }
