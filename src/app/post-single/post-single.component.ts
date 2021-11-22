import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../_services/blog/posts.serivce';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {
 post : any = {};
  constructor(private route: ActivatedRoute, private router : Router, private _postService : PostsService) {
    let postId : number | undefined = 0;
    this.route.queryParamMap.subscribe((params: any) => {
      postId = params.params.id;
    }); 
    
    if(postId){
      this.getPostDetail(postId);
    }else{
      this.router.navigateByUrl('/blog');
    }
   }

   getPostDetail(id:number){
      this._postService.getPost(id).subscribe(x=>{
        this.post = x;        
      })
   }

  ngOnInit(): void {

  }

}
