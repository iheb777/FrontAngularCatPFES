import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addpfe',
  templateUrl: './addpfe.component.html',
  styleUrls: ['./addpfe.component.css']
})
export class AddpfeComponent implements OnInit {
  listcat:any=[];
  pfe:any;

  constructor(private service:ServiceService) { }

  
  envoyer(){
    
    
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
  }

}
