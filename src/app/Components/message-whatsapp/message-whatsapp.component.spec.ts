import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWhatsappComponent } from './message-whatsapp.component';

describe('MessageWhatsappComponent', () => {
  let component: MessageWhatsappComponent;
  let fixture: ComponentFixture<MessageWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
