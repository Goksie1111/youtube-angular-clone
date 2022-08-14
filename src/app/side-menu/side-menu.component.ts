import { Component, OnInit } from '@angular/core';
import {faHouse, faCompass, faClapperboard, faPlayCircle, faFile} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuList: any[];
  faHouse= faHouse;
  faCompass = faCompass;
  faClapperboard = faClapperboard;
  faPlayCircle = faPlayCircle;
  faFile = faFile;
  constructor() { this.menuList = [] }

  ngOnInit(): void {


    this.menuList = [
      { menuName: 'Home' , icon: this.faHouse }, 
      { menuName: 'Explore' , icon: this.faCompass },
      { menuName: 'Shorts' , icon: this.faClapperboard },
      { menuName: 'Subscriptions' , icon: this.faCompass },
      { menuName: 'Library' , icon: this.faPlayCircle },
      { menuName: 'History' , icon: this.faFile }
    ]
  }

}
