import {Component, Input} from '@angular/core';
import {NumberedNote} from '../../models/note';
import {RelativeTimePipe} from '../../pipes/relative-time-pipe';
import {NoteService} from '../../services/note-service';

@Component({
  imports: [ RelativeTimePipe ],
  selector: 'app-note-card',
  styleUrl: './note-card.css',
  templateUrl: './note-card.html',
})
export class NoteCard {
  @Input() public index!: number; // For tracking
  @Input() public note!: NumberedNote;

  constructor(private noteService: NoteService) {}

  public delete() {
    this.noteService.delete(this.note.id);
  }
}
