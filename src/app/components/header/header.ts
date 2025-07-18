import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { State } from '../../services/state';

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
    this.searchControl.valueChanges.subscribe((value)=>{
      // console.log(value)
      this.stateService.searchSub.next(value || "")
    })
  }
  
}
