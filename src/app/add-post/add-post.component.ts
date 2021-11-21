import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/blog/category.service';

@Component({
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private _categoryService : CategoryService) {
    this.getAllCategories();
   }
  addPost : any = {};
  categories : any[] = [];
   ngOnInit(): void {
  }
  selectedCategory : any = 0;
  save(){
console.log(this.addPost);
console.log(this.selectedCategory);

  }
  getAllCategories(){
    this._categoryService.getAllCategories().subscribe(ref=>{
      this.categories = ref as [];
    });
  }
  
}
