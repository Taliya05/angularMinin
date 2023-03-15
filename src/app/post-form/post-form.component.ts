import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInput') inputRef: ElementRef | undefined
  title!: ''
  text!: ''


  constructor() {
  }
  ngOnInit() {
  }
  addPost() {
    if(this.text.trim() && this.title.trim()) {
      // @ts-ignore
      const post: Post = {
        title: this.title,
        text: this.text,
        date: new Date(),

      }
      this.onAdd.emit(post)
      this.title = ''
      this.text = ''
      // @ts-ignore
      this.date = Date

    }

  }

  focusTitle() {
    this.inputRef!.nativeElement.focus()

  }
}
