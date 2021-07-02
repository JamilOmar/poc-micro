import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  @Input() 
  links:any =[];
  @Input() 
  info:any ={};
  constructor() { }

  ngOnInit(): void {
    this.info ={
      title: 'Demo CRM',
      description:'Welcome to the Demo CRM'

    }
    this.links = [{
      url:['/orders'] , name:'Orders'},
      {url:['/users'] , name:'Users'},
      {url:['/admin'] , name:'Admin'},
      {url:['/alpha'] , name:'Alpha'}
    ]
  }

}
