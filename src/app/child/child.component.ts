import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  data:any = '';
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
  }

  onGet()
  {
   this.data =  this.dataService.onGetData();
  }

}
