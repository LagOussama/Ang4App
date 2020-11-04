import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {GalleryService} from "../../gallery.service";



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any;
  currentPage:number=1;
  size:number=5;
  pages:Array<number>=[];
  totalPages:number;
  motCle:string="";
  constructor(private galleryService:GalleryService) { }

  ngOnInit(): void {
  }

  onSearch(dataF){


   this.galleryService.onSearch(dataF.motCle,this.size,this.currentPage)
      .subscribe(data=>{
        console.log(data);
        this.pagePhotos = data;
        this.totalPages = this.pagePhotos.totalHits/this.size;

        if(this.pagePhotos.totalHits%this.size != 0 ) this.totalPages++;

        this.pages = new Array<number>(this.totalPages);



      },error1 => {
        console.log(error1);
        })




  }
  goTo(i){
    this.currentPage= i+1 ;

    this.onSearch({motCle:this.motCle})

  }

}
