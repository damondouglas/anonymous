import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: NoteService) {}
  disableSubmit: boolean = true
  content: string 
  notes: Array<Object> = []

  ngOnInit() {
    this.refreshNotes()
  }

  input() {
    this.disableSubmit = 
      this.content.length < 3
  }

  async submit() {
    await this.service.create(this.content)
    this.refreshNotes()
  }

  refreshNotes() {
    const compare = (note1, note2) => {
      if (note1.createdAt < note2.createdAt) {
        return -1
      } else if (note1.createdAt > note2.createdAt) {
        return 1
      } else return 0
    }
    this.service.list()
    .subscribe((data) => {
      data.sort(compare)
      this.notes = data
    })
  }
}
