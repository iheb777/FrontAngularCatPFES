import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  getAllPfes(){
    return this.http.get("http://localhost:8080/api/getallpfe");
  }
  getPfeByCatId(id:number){
    return this.http.get("http://localhost:8080/api/getbycatpfe/"+id);
  }

  getPfeBySearch(id:string){
    return this.http.get("http://localhost:8080/api/getresultsearch/"+id);
  }

  getAllCat(){
    return this.http.get("http://localhost:8080/api/getallcat");
  }

  getLabelCat(id:number){
    return this.http.get("http://localhost:8080/api/getonecat/"+id);

  }
  delete(id:number){
 
    this.http.delete("http://localhost:8080/api/deletepfe/"+id).subscribe(()=>
    console.log("user deleted")
    );
}
}
