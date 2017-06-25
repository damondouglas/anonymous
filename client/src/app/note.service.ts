import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs'

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  create(content: string) {
    this.http.post('/note/create', {content: content})
    .toPromise()
  }

  list() {
    return this.http.get('/note/list')
    .map(data => data.json())
  }

}
