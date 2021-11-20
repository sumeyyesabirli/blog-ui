import { Component, Input, OnInit } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

constructor(){}

post=[
    {name:"sümeyye",title:"angular"},
    {name:"s",title:"a"}

]
  






  ngOnInit(): void {
  }

}
