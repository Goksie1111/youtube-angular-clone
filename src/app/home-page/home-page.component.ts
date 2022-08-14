import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbsDown, faShare, faPlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faShare = faShare;
  faPlus = faPlus;
  firstSectionData: any;
  constructor() { }

  ngOnInit(): void {

    this.firstSectionData = [

      {
        imgUrl : '../../assets/youtube/F09.jpg',
        subImgUrl: "../../assets/youtube/F009.jpg",
        title: "Oru Kal Oru Kannadi Cover Song | Tamil Covers | Yuvan Shankar Raja...",
        channelName: 'The Tape',
        views: "3.6K views",
        time: "2 years ago"
      },
      {
        imgUrl : '../../assets/youtube/car.jpg',
        subImgUrl: "../../assets/youtube/1.jpg",
        title: "LumiLor - Lexus Heartbeat Car Check this out",
        channelName: 'LumiLor',
        views: "1.7M views",
        time: "2 years ago"
      },

      {
        imgUrl : '../../assets/youtube/landrover.jpg',
        subImgUrl: "../../assets/youtube/landrover-1.jpg",
        title: "New Range Rover Sport 2022 - An Amazing Luxury SUV",
        channelName: 'Denis Lukic',
        views: "53K views",
        time: "12 days ago"
      },
      {
        imgUrl : '../../assets/youtube/music.jpg',
        subImgUrl: "../../assets/youtube/music01.jpg",
        title: "Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style - Feelin...",
        channelName: 'Deep Mood',
        views: "1.1B views",
        time: "3 years ago"
      },
      {
        imgUrl : '../../assets/youtube/war.jpg',
        subImgUrl: "../../assets/youtube/war01.jpg",
        title: "Sun Tzu | The Art of War",
        channelName: 'EinzelGanger',
        views: "2.6M views",
        time: "1 years ago"
      },
      {
        imgUrl : '../../assets/youtube/summer.jpg',
        subImgUrl: "../../assets/youtube/summer01.jpg",
        title: "Relax House, Chillout, Study, Travel, Happy, Music...",
        channelName: 'Green Sound',
        views: "934K views",
        time: "9 months ago"
      },

      {
        imgUrl : '../../assets/youtube/nolan.jpg',
        subImgUrl: "../../assets/youtube/nolan01.jpg",
        title: "Amazing Shots of CHRISTOPHER NOLAN",
        channelName: 'Green Sound',
        views: "40M views",
        time: "4 years ago"
      },
      {
        imgUrl : '../../assets/youtube/surya.jpg',
        subImgUrl: "../../assets/youtube/sony.jpg",
        title: "Jai Bhim - Polladha Ulagathiley Video | Suriya | Sean Roldan",
        channelName: 'Sony Music',
        views: "1.7M views",
        time: "8 months ago"
      },
      {
        imgUrl : '../../assets/youtube/interstellar.jpg',
        subImgUrl: "../../assets/youtube/interstellar01.jpg",
        title: "Interstellar Official Soundtrack | Full Album - Hans Zimmer | WaterTower",
        channelName: 'WaterTower Music',
        views: "5.1M views",
        time: "1 year ago"
      },
      {
        imgUrl : '../../assets/youtube/F01.jpg',
        subImgUrl: "../../assets/youtube/F001.jpg",
        title: "Monolik set - Beatport x Dessert Live Stream | @Beatport Live",
        channelName: 'Beatport',
        views: "687K views",
        time: "Streamed 2 year ago"
      },
      {
        imgUrl : '../../assets/youtube/F02.jpg',
        subImgUrl: "../../assets/youtube/F002.jpg",
        title: "Samsung Galaxy Z flip 4 - Why I NEARLY Switched",
        channelName: 'Mrwhotheboss',
        views: "2.5M views",
        time: "6 days ago"
      },
      {
        imgUrl : '../../assets/youtube/F03.jpg',
        subImgUrl: "../../assets/youtube/F003.jpg",
        title: "Apple iOS16 - 14 Settings You Must Change on Launch",
        channelName: 'Andrew Ethan Zeng',
        views: "40M views",
        time: "3 days ago"
      },
      {
        imgUrl : '../../assets/youtube/F04.jpg',
        subImgUrl: "../../assets/youtube/F004.jpg",
        title: "watchOS 9 - 25+ Best New Features & Changes!",
        channelName: 'Brandon Butch',
        views: "374K views",
        time: "2 months ago"
      },
      {
        imgUrl : '../../assets/youtube/F05.jpg',
        subImgUrl: "../../assets/youtube/F005.jpg",
        title: "Alaska in 8K 60p HDR (Dolby Vision)",
        channelName: 'Jacob + Katie Schwarz',
        views: "6.5M views",
        time: "4 months ago"
      },
      {
        imgUrl : '../../assets/youtube/F06.jpg',
        subImgUrl: "../../assets/youtube/F006.jpg",
        title: "The power of the placebo effect Emma Bryce",
        channelName: 'TED-Ed',
        views: "3.8M views",
        time: "6 years ago"
      },
      {
        imgUrl : '../../assets/youtube/F07.jpg',
        subImgUrl: "../../assets/youtube/F007.jpg",
        title: "Music for when you are stressed chill lofi | Music to Relax",
        channelName: 'Little Soul',
        views: "218K views",
        time: "2 months ago"
      },
      {
        imgUrl : '../../assets/youtube/F10.jpg',
        subImgUrl: "../../assets/youtube/F010.jpg",
        title: "Battle for Azeroth: Varok Saufrang's Mak'gora",
        channelName: 'World of Warcraft',
        views: "16M views",
        time: "3 years ago"
      },
      {
        imgUrl : '../../assets/youtube/F11.jpg',
        subImgUrl: "../../assets/youtube/F110.jpg",
        title: "A Day In The Life Of Sundar Pichai (Google's CEO)",
        channelName: 'Nonstop Tech',
        views: "2.6M views",
        time: "6 months ago"
      },
      {
        imgUrl : '../../assets/youtube/F012.jpg',
        subImgUrl: "../../assets/youtube/F0012.jpg",
        title: "Mariana Trench | In Pursuit of the Abyss",
        channelName: 'Natural World Facts',
        views: "12M views",
        time: "1 year ago"
      },
      
    ]
  }

}
