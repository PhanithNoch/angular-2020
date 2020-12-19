import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchText:any;
  photos = [
  {'title':'pretty girl',url:'https://miro.medium.com/max/11520/1*1r6svzgXlqUYIDP275mUJw.jpeg'},
  {'title':'japan girl',url:'https://cdn.telanganatoday.com/wp-content/uploads/2017/04/040818YOUTUBE-MARVEL.jpg'},
  {'title':'chhineses girl',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX41D2DsMOYsmUKj7UZVLSgpIS114i3OBGTA&usqp=CAU'},
  {'title':'cambodia girl',url:'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg'},
  {'title':'cambodia girl',url:'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg'},
  {'title':'cambodia girl',url:'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg'},
  {'title':'cambodia girl',url:'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg'},
  {'title':'cambodia girl',url:'https://i.pinimg.com/736x/8f/2c/59/8f2c59d2b380731ce7d61fda5b7d647b.jpg'},
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }



}
