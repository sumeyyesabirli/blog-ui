import { Component, Input, OnInit } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  post = [
    {category : 'boş şeyler',date : '20.10.2021',author : 'ss', img: "https://material.angular.io/assets/img/examples/shiba1.jpg", title: "Post 1", description : 'birinci postun birazı...' },
    {category : 'hayvan sevgisi',date : '20.11.2021', author : 'ss', img: "https://material.angular.io/assets/img/examples/shiba2.jpg", title: "Post 2", description : 'birinci postun birazı...' },
  ]

  ngOnInit(): void {
  }
}
