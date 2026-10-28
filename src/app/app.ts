import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NoteList} from './components/note-list/note-list';

@Component({
  imports: [RouterOutlet, NoteList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('notes-app');
}
