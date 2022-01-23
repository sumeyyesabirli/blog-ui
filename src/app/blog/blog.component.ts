import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../_services/blog/posts.serivce';
import { Products } from './products';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  post : any = [
  ]

  constructor(private _postService : PostsService) { 
      this.getLastTreePosts(); //son 3 postu çekmek için func yazdım
  }

  ngOnInit(): void {

  }

  getLastTreePosts(){
    //subscibe olmadan içindeki veriye erişemem, bi neni abone oluyorsun
    this._postService.getLastPosts().subscribe(x=>{
        this.post = x;
    })
  }
}
