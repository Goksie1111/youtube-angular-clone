import { Component, OnInit } from '@angular/core';
import {faHouse, faTrophy, faGamepad, faFilm, faNewspaper, faWifi, faShirt, faGraduationCap, faLightbulb,
  faClapperboard, 
  faPlayCircle,
   faFile,faPlay,
   faMusic} from '@fortawesome/free-solid-svg-icons'
import {faCompass} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-side-menu-expanded',
  templateUrl: './side-menu-expanded.component.html',
  styleUrls: ['./side-menu-expanded.component.scss']
})
export class SideMenuExpandedComponent implements OnInit {
  menuList: any[];
  faHouse= faHouse;
  faCompass = faCompass;
  faClapperboard = faClapperboard;
  faPlayCircle = faPlayCircle;
  faFile = faFile;
  faMusic = faMusic;
  faTrophy = faTrophy;
  faGamepad = faGamepad;
  faFilm = faFilm;
  faNewspaper = faNewspaper;
  faWifi = faWifi;
  faShirt = faShirt;
  faGraduationCap = faGraduationCap;
  faLightbulb = faLightbulb;
  faPlay = faPlay;
  menuListOption: any[];
  constructor() {
    this.menuList = [];
    this.menuListOption =[];
   }

  ngOnInit(): void {

    this.menuList = [
      { menuName: 'Home' , icon: this.faHouse }, 
      { menuName: 'Explore' , icon: this.faCompass },
      { menuName: 'Shorts' , icon: this.faClapperboard },
      { menuName: 'Subscriptions' , icon: this.faPlay },
      { menuName: 'Library' , icon: this.faPlayCircle },
      { menuName: 'History' , icon: this.faFile }
    ];

    this.menuListOption=[

      { menuName: 'Music' , icon: this.faMusic }, 
      { menuName: 'Sports' , icon: this.faTrophy },
      { menuName: 'Gaming' , icon: this.faGamepad },
      { menuName: 'Movies' , icon: this.faFilm },
      { menuName: 'News' , icon: this.faNewspaper },
      { menuName: 'Live' , icon: this.faWifi },
      { menuName: 'Fashion & beauty' , icon: this.faShirt },
      { menuName: 'Learning' , icon: this.faGraduationCap },
      { menuName: 'Spotlight' , icon: this.faLightbulb }

    ]
  }

}
