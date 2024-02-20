import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificatPage } from './notificat.page';

describe('NotificatPage', () => {
  let component: NotificatPage;
  let fixture: ComponentFixture<NotificatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
