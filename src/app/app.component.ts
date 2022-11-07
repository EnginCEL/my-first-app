import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
  name = 'my-first-app';
allowNewServe=true;

  constructor(){
setTimeout(()=>{
  this.allowNewServe=false;
},3000)
  }
ngOnInit() {
      }
}
