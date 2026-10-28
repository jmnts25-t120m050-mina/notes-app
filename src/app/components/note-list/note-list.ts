import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NumberedNote} from '../../models/note';
import {NoteCardNew} from '../note-card-new/note-card-new';
import {NoteCard} from '../note-card/note-card';
import {NoteService} from '../../services/note-service';

@Component({
  imports: [
    NoteCardNew,
    NoteCard
  ],
  selector: 'app-note-list',
  styleUrl: './note-list.css',
  templateUrl: './note-list.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class NoteList {
  public notes: NumberedNote[] = [];
  //public noteCnt: number = 0;

  constructor(noteService: NoteService) {
    this.notes = noteService.notes;
    //noteService.onNoteCntChanged.subscribe(noteCnt => { this.noteCnt = noteCnt; });
  }
}
