import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from '../_models/comments';
import { CommentsService } from '../_services/blog/comments.service';
import { PostsService } from '../_services/blog/posts.serivce';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {
 post : any = {};
 comments : Comments[] = [];
 newComment : Comments = new Comments();
  constructor(private route: ActivatedRoute, private router : Router, private _postService : PostsService, private _commentsService : CommentsService) {
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
        this.getCommentsForPost();     
      })
   }

  ngOnInit(): void {

  }

  getCommentsForPost(){
    this._commentsService.getCommentsForPost(this.post.id).subscribe(x=> {
      this.comments = x as [];
    })
  }

  addComment(){
    this.newComment.postId = this.post.id;
    this._commentsService.addPost(this.newComment).subscribe(x=>{
      this.getCommentsForPost();
      this.newComment = new Comments();
    })
  }
}
