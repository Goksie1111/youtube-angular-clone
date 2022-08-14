import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faBars, faMagnifyingGlass, faMicrophone, faEllipsisVertical, faUserCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faYoutube = faYoutube;
  faBars = faBars
  faMagnifyingGlass = faMagnifyingGlass;
  faMicrophone = faMicrophone;
  faEllipsisVertical = faEllipsisVertical;
  faUserCircle = faUserCircle;
  expanded : any;
  status: any;
  @Output() menuButtonClicked = new EventEmitter<boolean>();
  constructor() { 
    this.status = !this.status
    this.menuButtonClicked.emit(this.status);
  }

  ngOnInit(): void {
  }

  menuStatusChanged(){
    this.status = !this.status
    this.menuButtonClicked.emit(this.status);

  }

  

}
