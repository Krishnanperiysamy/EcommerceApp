import { Component,ElementRef,OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationItem } from '../models/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modalTitle!: ElementRef;
  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!: ViewContainerRef;

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

  openModal(name:string){
    this.container.clear();

    let ComponentType!: Type<any>;

    if(name=='login'){
      ComponentType=LoginComponent;
      // this.modalTitle.nativeElement.textContent ='Enter a login Information'
    }
    if(name=='register'){
      ComponentType=RegisterComponent;
      // this.modalTitle.nativeElement.textContent = 'Enter a Register Information'
    }
    this.container.createComponent(ComponentType);

  }
}
