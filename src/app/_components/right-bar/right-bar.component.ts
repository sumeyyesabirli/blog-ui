import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/_services/blog/posts.serivce';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  constructor(private _postService : PostsService) { }
  posts : any[] = [];
  ngOnInit(): void {
    this.getRandomPost();
  }
  getRandomPost(){
    this._postService.getRandomPost().subscribe(x=>{
      this.posts = x as [];
    })
  }

}
