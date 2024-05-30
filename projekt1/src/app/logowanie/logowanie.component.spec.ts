import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogowanieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login correctly', () => {
    component.formData.username = 'Karol';
    component.formData.password = 'Tomaszewski';

    component.logowanie();
  });

  it('should not login', () => {
    component.formData.username = 'Karol';
    component.formData.password = 'Tomaszewski1';

    spyOn(window, "alert");
    component.logowanie();

    expect(window.alert).toHaveBeenCalledOnceWith("Błąd logowania. Sprawdź dane.");
  })
});
