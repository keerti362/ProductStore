import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TermsComponent } from '../terms/terms.component';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TopBarComponent],
    }).compileComponents().then(() => {

    });
    fixture = TestBed.createComponent(TermsComponent);
    component = fixture.componentInstance;
  }));

  xit('should create the app1', () => {
    expect(component).toBeTruthy();;

  });
});

