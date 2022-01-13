import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-listpfe',
  templateUrl: './listpfe.component.html',
  styleUrls: ['./listpfe.component.css']
})
export class ListpfeComponent implements OnInit {

  tosearch:string="";
  list:any=[];
  listcat:any=[];
  constructor(private service:ServiceService) { }

  getSearchresualt(){
    this.service.getPfeBySearch(this.tosearch).subscribe(
      {
        next:(a:any)=>{
          this.list=a;
        }
      }
    )
  }
  getBycatId(id:number){
    this.service.getPfeByCatId(id).subscribe(
      {
        next:(d:any)=>{
          this.list=d;
          console.log(this.list);
        }
      }
    )
  }
  delete(id:number){
    console.log(id);
    this.service.delete(id);
    window.location.reload();

  }
  ngOnInit(): void {
    this.service.getAllCat().subscribe(
      {
        next:(dat:any)=>{
          this.listcat=dat;
          console.log(this.listcat);

        }
      }
    )
    this.service.getAllPfes().subscribe(
      {
        next:(data:any)=>{
          this.list=data;
          console.log(this.list);
        }
      }
    )
  }

}
