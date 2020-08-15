import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-mat-select-search',
  templateUrl: './mat-select-search.component.html',
  styleUrls: ['./mat-select-search.component.scss']
})
export class MatSelectSearchComponent  {
  disableSelect = new FormControl(false);
}
