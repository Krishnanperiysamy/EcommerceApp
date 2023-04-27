import { Component,OnInit } from '@angular/core';
import { NavigationItem } from '../models/models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navigationList: NavigationItem[]=[{
  category:"electronics",
  subcategories:["mobiles","laptops"]
},
{
  category:"furnitures",
  subcategories:["chairs","tables"]
}
];

constructor(){

}
  ngOnInit():void{}
}
