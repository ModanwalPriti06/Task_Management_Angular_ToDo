import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { State } from '../../services/state';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  searchTerm: string = ''
  searchControl =  new FormControl();

  // @Output() search = new EventEmitter<string>();
  stateService = inject(State)

  ngOnInit(){
    this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
      // console.log(value)
      this.stateService.searchSub.next(value || "")
    })
  }
  
}
