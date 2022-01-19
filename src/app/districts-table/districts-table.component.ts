import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-districts-table',
  templateUrl: './districts-table.component.html',
  styleUrls: ['./districts-table.component.css']
})
export class DistrictsTableComponent implements OnInit {

  totalData: any;
  stateCodes: any;
  allDistricts: any[] = [];
 
  
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
      
      this.totalData = data;
      this.stateCodes = Object.entries(data).map((key,value)=>key[1]);
      console.log("yo"+ this.stateCodes);
      for(let state of this.stateCodes)
      {
        this.allDistricts.push(Object.entries(state.districts));
      }
      console.log(this.allDistricts);
    });
  }


}
