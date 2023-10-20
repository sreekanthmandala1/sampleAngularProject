import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hi:any = 'sampleAngularProject';
  param1:any;
  param2:any;
  data = [
    {
      name : "test",
      age : "23",
      city : "wgl"
    },
    {
      name : "test2",
      age : "23",
      city : "wgl"
    },
    {
      name : "test3",
      age : "23",
      city : "wgl"
    }
  ]
  constructor(private route: ActivatedRoute){
    
    this.route.queryParams.subscribe(params => {
      
      this.param1 = params['file'];
      // this.param2 = params['param2'];
  });


  }
}
