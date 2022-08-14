import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { YoutubeMockComponent } from './youtube-mock/youtube-mock.component';

const routes: Routes = [
  {
    path:'youtube', component: YoutubeMockComponent,
  },
  {
    path:'youtube/exp', component: YoutubeMockComponent,
  },
  {
    path:'youtube/home', component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
