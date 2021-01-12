import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharacteresPage } from './characteres.page';

describe('CharacteresPage', () => {
  let component: CharacteresPage;
  let fixture: ComponentFixture<CharacteresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
