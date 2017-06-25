import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service'

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  @Input() notes: Array<Object> = []
  constructor(private service: NoteService) { }

  ngOnInit() {
  }

}
