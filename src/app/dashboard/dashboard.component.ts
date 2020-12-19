import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  index: any = 0;
  data:any = {
    title:'',
    url:''
  };
  photos = [
    { 'title': 'pretty girl', url: 'https://miro.medium.com/max/11520/1*1r6svzgXlqUYIDP275mUJw.jpeg' },
    { 'title': 'japan girl', url: 'https://cdn.telanganatoday.com/wp-content/uploads/2017/04/040818YOUTUBE-MARVEL.jpg' },
    { 'title': 'chhineses girl', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX41D2DsMOYsmUKj7UZVLSgpIS114i3OBGTA&usqp=CAU' },
    { 'title': 'cambodia girl', url: 'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg' },
    { 'title': 'cambodia girl', url: 'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg' },
    { 'title': 'cambodia girl', url: 'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg' },
    { 'title': 'cambodia girl', url: 'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg' },
    { 'title': 'cambodia girl', url: 'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg' },
  ];
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    console.log('constructor init...');
  }

  ngOnInit() {
    console.log('ngOnInit init...');

    let index: any;

    //for get param id from url 
    this.activeRoute.params.subscribe(params => {
      console.log(params['id']);
      index = params['id']
    });
    this.data = this.photos[index];
    console.log(this.data);
  }
  //function
  ngAfterContentInit()
  {
    console.log('content init...');
  }

}
