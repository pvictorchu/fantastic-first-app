import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarPostPage } from './criar-post.page';

describe('CriarPostPage', () => {
  let component: CriarPostPage;
  let fixture: ComponentFixture<CriarPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
