import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosComponent } from './ios.component';

describe('IosComponent', () => {
  let component: IosComponent;
  let fixture: ComponentFixture<IosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
