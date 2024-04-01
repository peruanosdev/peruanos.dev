import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommunityDetailComponent } from './card-community-detail.component';

describe('CardCommunityDetailComponent', () => {
  let component: CardCommunityDetailComponent;
  let fixture: ComponentFixture<CardCommunityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCommunityDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCommunityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
