import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  textFild:any = '';
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
  }

  onSend(data)
  {
    this.dataService.onSetData(data);
  }
}
