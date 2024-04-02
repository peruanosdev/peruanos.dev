import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContributorsComponent } from './card-contributors.component';

describe('CardContributorsComponent', () => {
  let component: CardContributorsComponent;
  let fixture: ComponentFixture<CardContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContributorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
