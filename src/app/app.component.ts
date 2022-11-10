import {Component, OnInit} from '@angular/core';
import {Post} from "../Model/post";
import {myserviceService} from "../services/myservice.service";


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  implements  OnInit{
  name = 'my-first-app';
  posts: Post[] = [];
allowNewServe=true;
  ServerStatus="Server was not created..."

  constructor(private postService: myserviceService){
setTimeout(()=>{
  this.allowNewServe=false;
},3000)
  }
ngOnInit() {
  this.getAllPosts();
      }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((data: Post[])=>{


      this.posts = data;
    });
  }

  OnCreatedServer(){

    this.ServerStatus="Server was Created..."
  }
}

