import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  constructor(private authService:AuthService){}
  obj:any={};
  ngOnInit(){
    this.authService.stats().subscribe((res)=>{
      //console.log(res)
      this.obj=res
   })
  }

}
