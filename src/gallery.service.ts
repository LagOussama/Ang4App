import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GalleryService {

  constructor(private http:HttpClient) {
  }


  onSearch(motCle:string, size:number, page:number) {
   return this.http.get("https://pixabay.com/api/?key=15901790-879c49f35bf9cc7ebb0244789&q="+
      motCle+"+&per_page="+size+"&&page="+page);
  }

}

