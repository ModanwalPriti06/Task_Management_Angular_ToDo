import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [DatePipe],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss'
})
export class PageTitle {
    dateNow = new Date();

}
