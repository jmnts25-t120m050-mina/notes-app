import { Component } from '@angular/core';
import {NoteService} from '../../services/note-service';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-note-card-new',
  styleUrl: './note-card-new.css',
  templateUrl: './note-card-new.html',
})
export class NoteCardNew {
  public title: string | null = null;
  public body: string | null = null;

  constructor(private noteService: NoteService) {}

  public add() {
    if (!(this.title === null || this.body === null)) {
      this.noteService.add({title: this.title, body: this.body});
    }
  }
}
