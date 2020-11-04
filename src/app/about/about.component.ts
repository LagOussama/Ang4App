import { Component, OnInit } from '@angular/core';
import {AboutService} from "../../services/about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class  AboutComponent implements OnInit {


  info:any;
  comments=[];
  commentaire={date:new Date(),message:""};


  constructor(private aboutService:AboutService) {

    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit(): void {
  }

  onAddCommantaire(c){
//    this.commentaire.date = new Date();
    this.aboutService.addComment(c);
    this.comments = this.aboutService.getAllComments();
    this.commentaire.message="";

    // this.comments.push(c);
  //  this.commentaire={date:new Date(),message:""};
  }
}
