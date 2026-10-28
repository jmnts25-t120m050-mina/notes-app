import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteCardNew } from './note-card-new';

describe('NoteCardNew', () => {
  let component: NoteCardNew;
  let fixture: ComponentFixture<NoteCardNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteCardNew],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteCardNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
