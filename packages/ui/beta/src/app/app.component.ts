import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'beta';
  links:any =[];
  info:any ={};
  constructor() { }

  ngOnInit(): void {
    this.info ={
      title: 'Beta Service',
      description:'Welcome to the Beta Service'

    }
    this.links = [{
      url:['/support'] , name:'Support'},
      {url:['/admin'] , name:'Admin'},
    ]
  }
}
