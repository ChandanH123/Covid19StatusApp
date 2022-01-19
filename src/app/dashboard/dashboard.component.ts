import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalData: any;
  stateCodes: any;
  
  constructor(private userService: UserService)
  {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll()
  {
    console.log("Inside app.component.ts.getAll()");
    return this.userService.getAll().subscribe( (data: any) => {
      console.log(data);
      this.totalData = data;
      this.stateCodes = Object.keys(data);
      console.log(this.stateCodes);
    });
  }

}
