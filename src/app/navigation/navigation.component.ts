import { Component, Input, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterModule
  ],
})
export class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  @Input()
  userName = '';

  user!: User;

  constructor(private router: Router) {}
  ngOnInit(): void {
    const userInfo = localStorage.getItem('token');
    if(userInfo){
      this.user = JSON.parse(userInfo)
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
