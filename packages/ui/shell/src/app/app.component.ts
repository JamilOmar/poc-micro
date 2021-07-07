import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shell';
  links:any =[];
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
      {url:['/alpha'] , name:'Alpha'},
      {url:['/beta'] , name:'Beta'}
    ]
  }
}
