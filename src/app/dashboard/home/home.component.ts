import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/shared/utils/user.service';
import { DataService } from 'src/app/data.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {
  faShoppingCart,
  faFileAlt,
  faShippingFast,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
// import { User } from '@sentry/browser';
import { trigger, transition, style, animate } from '@angular/animations';
// import { IUser , IHubDocument} from 'src/app/shared/types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ 'margin-left': 50, opacity: 0 }),
            animate('1s ease-out',
                    style({ 'margin-left': 30, opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave',
        //   [
        //     style({ height: 300, opacity: 1 }),
        //     animate('1s ease-in',
        //             style({ height: 0, opacity: 0 }))
        //   ]
        // )
      ]
    ),
    trigger(
      'fadeInOut',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
                    style({  opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave',
        //   [
        //     style({ opacity: 1 }),
        //     animate('1s ease-in',
        //             style({  opacity: 0 }))
        //   ]
        // )
      ]
    )
  ]
})
export class HomeComponent implements OnInit {
  isLoading = false;
  hubs: any[];
  user: any;
  constructor(
    // private userService: UserService,
    private dataService: DataService,
    // public dialog: MatDialog,
    private router: Router,
  ) { }
  add = faPlus;

  ngOnInit() {
    this.checkLoginStatus();
    this.fetchUserHubs();
  }

  fetchUserHubs() {
    this.isLoading = true;
    // const user = this.userService.fetchUserDetails();
    // if(user){
    //  this.dataService.fetchUserHubs(user._id).subscribe((res: IHubDocument[]) => {
    //    this.isLoading = false;
    //    this.hubs = res;
    //  },
    //  error => {
    //    this.isLoading = false;
    //  });

    //  if(user.tier === 'admin'){ 
    //    this.dataService.fetchUnlinkedHubs(user._id).subscribe((hubs: IHubDocument[])=> {
    //     this.hubs = this.hubs && this.hubs.length> 0? this.hubs.concat(hubs): hubs;
    //    });
    //  }
    // }

    this.isLoading = false;
 }

 // private showEditModal(hubIndex){
 //   console.log(this.hubs[hubIndex])
 //   this.dialog.open(EditHubComponent,{
 //     width: '650px',
 //     minHeight: '500px',
 //     data: this.hubs[hubIndex],
 //   }
 //     );
 // }

  navigateToEdit(hubIndex) {
   this.router.navigate(['in','edit-hub', this.hubs[hubIndex]._id]);
 }
 private checkLoginStatus() {
  try {
    // const value = this.userService.fetchUserDetails();
    // if(value){
    //    this.user = value;
    // }
    
  } catch (error) {
    throw error;
    // TODO: Create component that shows errors...
  }
}
}
