import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';
import { Post } from './post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  data:Post[]=[];

  constructor(private api:GetApiService){

  }

  callTheApi(){
    this.api.apiCall().subscribe((data:any)=>{
      console.log("get api data", data);
      this.data =data
    })
  }

  // ngOnInit(){
  //   this.callTheApi()
  // }
}
