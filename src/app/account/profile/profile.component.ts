import { UserResponse } from './../../shared/models/userResponse';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:number;
  user:UserResponse;
  constructor(
    private userService:UserService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.userId= +params.get('id');
      this.userService.getUserProfile(this.userId).subscribe(
        (u)=>{
          this.user=u;
          console.log(this.userId);
          console.table(this.user);
      });
    });
  }

}
