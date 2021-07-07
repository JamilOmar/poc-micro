import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alpha';
  links:any =[];
  info:any ={};
  constructor() { }

  ngOnInit(): void {
    this.info ={
      title: 'Alpha Service',
      description:'Welcome to the Alpha Service'

    }
    this.links = [{
      url:['/stores'] , name:'Stores'},
      {url:['/admin'] , name:'Admin'},
    ]
  }
}
