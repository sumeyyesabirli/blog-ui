import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../_services/blog/category.service';
import { PostsService } from '../_services/blog/posts.serivce';

@Component({
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private _categoryService: CategoryService, private _postService : PostsService,  private _snackbar: MatSnackBar) {
    this.getAllCategories();
    let lcl = localStorage.getItem("user");
    if (lcl) {
      let user = JSON.parse(lcl);
      this.addPost.userId = user.userId;
    }
  }
  addPost: any = {};
  categories: any[] = [];
  ngOnInit(): void {
  }
  selectedCategory: any = 0;
  save() {
    this.addPost.imageUrl = this.addPost.img; //backend öyle istiyor çünkü
    this._postService.addPost(this.addPost).subscribe(ref=>{
        console.log(ref);
        this._snackbar.open("Yazı başarıyla eklendi!")._dismissAfter(3);
        this.addPost = {}; //yazı eklendikten sonra ekranı temizle
    },err=>{
      this._snackbar.open(err)._dismissAfter(3);

    });
  }
  getAllCategories() {
    this._categoryService.getAllCategories().subscribe(ref => {
      this.categories = ref as []; //ref'in tipinin ne olduğu belli değil (any tipinde), array'a çevirmek için as [] kullanıyoruz 
    });
  }
  /**
   * 
   * @param event 
   */
  setCategory(event: any) {
    console.log(event);
    this.addPost.categoryId = event.value;
  }

  /**
   * bilgiler boş mu değil mi diye kontrol edicez!
   */
  get validation() {
    let r1 = !this.addPost.userId;
    let r2 = !this.addPost.title;
    let r3 = !this.addPost.description;
    let r4 = !this.addPost.contentText;
    let r5 = !this.addPost.img;
    let r6 = !this.addPost.categoryId;
    return r1 || r2 || r3 || r4 || r5 || r6;
  }
}
