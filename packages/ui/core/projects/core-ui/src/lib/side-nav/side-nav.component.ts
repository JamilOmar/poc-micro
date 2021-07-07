import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() 
  links:any =[];
  @Input() 
  info:any ={};
  constructor() { }

  ngOnInit(): void {
  }

}
