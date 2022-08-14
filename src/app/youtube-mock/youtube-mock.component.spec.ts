import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMockComponent } from './youtube-mock.component';

describe('YoutubeMockComponent', () => {
  let component: YoutubeMockComponent;
  let fixture: ComponentFixture<YoutubeMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeMockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
