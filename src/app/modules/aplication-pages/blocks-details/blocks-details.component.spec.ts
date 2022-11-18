import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksDetailsComponent } from './blocks-details.component';

describe('BlocksDetailsComponent', () => {
  let component: BlocksDetailsComponent;
  let fixture: ComponentFixture<BlocksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
