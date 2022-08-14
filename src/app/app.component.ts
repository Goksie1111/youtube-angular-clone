import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expanded: any;
  constructor(private route: Router){

  }

  ngOnInit(){
    this.route.navigate(['youtube'])
  }

  menuStatusChange(event : any){
    console.log(event)
    this.expanded = !this.expanded;

    if(!this.expanded){
      this.route.navigate(['youtube'])
    } else{
      this.route.navigate(['youtube/exp'])
    }
  }
}
