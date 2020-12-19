import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data = {};
  constructor() { }

  onSetData(data:any)
  {
    this.data = data;
  }

  onGetData()
  {
    return this.data;
  }
}
