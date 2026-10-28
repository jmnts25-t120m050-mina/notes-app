import {Service} from '@angular/core';
import {NewNote, Note, NumberedNote} from '../models/note';

@Service()
export class NoteService {
  public notes: NumberedNote[] = [];
  private noteId: number = 0;
  //public onNoteCntChanged = new EventEmitter<number>();

  constructor() {
    this.notes = Object.keys(localStorage).map(key => [key, localStorage.getItem(key)])
      .filter(x => x[1] != null)
      .map(entry => {
        try {
          let note: NumberedNote = JSON.parse(entry[1]!);
          note.id = parseInt(entry[0]!);
          return note;
        }
        catch {
          return null
        }
      })
      .filter(x => x != null)
      .sort((a, b) => b.id! - a.id!);
    //this.onNoteCntChanged.emit(this.notes.length);
    if (this.notes.length > 0) {
      this.noteId = this.notes[0].id! + 1;
    }
  }

  private save(numberedNote: NumberedNote) {
    localStorage.setItem(numberedNote.id!.toString(), JSON.stringify(numberedNote as Note));
  }

  public add(newNote: NewNote) {
    let numberedNote = newNote as NumberedNote;
    numberedNote.created = Date.now();
    numberedNote.id = this.noteId++;
    this.notes.unshift(numberedNote);
    //this.onNoteCntChanged.emit(this.notes.length);
    this.save(numberedNote);
  }

  public delete(id: number | null) {
    if (id != null) {
      let index = this.notes.findIndex(x => x.id === id);
      if (index >= 0) {
        this.notes.splice(index, 1);
        localStorage.removeItem(id.toString());
      }
    }
  }
}
