import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlReportComponent } from './url-report.component';

describe('UrlReportComponent', () => {
  let component: UrlReportComponent;
  let fixture: ComponentFixture<UrlReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
