import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent implements OnInit {

  userName = '';

  ngOnInit(): void {
    const userInfo = localStorage.getItem('token');
    if(userInfo){
      const user : User = JSON.parse(userInfo)
      this.userName = user.name;
    }
  }
}
