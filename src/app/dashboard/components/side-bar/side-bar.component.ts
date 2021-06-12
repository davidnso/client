import { Component, OnInit, Input } from '@angular/core';
import {
  faDesktop,
  faStickyNote,
  faCalendarAlt,
  faBullhorn,
  faNetworkWired,
  faPlusSquare,
  faBookReader
} from '@fortawesome/free-solid-svg-icons';
// import { IUser } from 'src/app/shared/types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  faDesktop = faDesktop;
  faStickyNote = faStickyNote;
  faCalendarAlt = faCalendarAlt;
  faBullhorn = faBullhorn;
  faNetworkWired = faNetworkWired;
  faPlusSquare = faPlusSquare;
  faBookReader = faBookReader;
  currentIndex = 1;
  @Input() user: any;
  
  @Input() initials: string;
  userIsLoggedIn = false;
  isLoading = false;
  constructor(
    private route: Router
  ) {
    if(route.url.includes('profile')){
      this.currentIndex= 2;
    }

  }

  ngOnInit() {
  }

  
  clickEvent(index) {
    this.currentIndex = index;
}
}
