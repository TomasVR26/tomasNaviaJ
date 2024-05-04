import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatologoComponent } from './catologo.component';

describe('CatologoComponent', () => {
  let component: CatologoComponent;
  let fixture: ComponentFixture<CatologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatologoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
