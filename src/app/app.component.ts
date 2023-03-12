import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'I want to learn Angular', text: 'I am still learning Angular', id: 1},
    {title: 'Directives and pipes', text: 'Learning directives and pipes', id: 2}
  ]
}

  // backgroundToggle = 0
  // toggle: any = false
  // arr = [1, 1, 2, 3, 5, 8, 13]
  // obj = [
  //   {
  //     title: 'Post 1', author: 'Vladilen 1', comments: [
  //       {name: 'Max 1', text: 'lorem 1'},
  //       {name: 'Max 1', text: 'lorem 2'},
  //       {name: 'Max 1', text: 'lorem 3'},
  //     ]
  //   },
  //   {
  //     title: 'Post 2', author: 'Vladilen 2', comments: [
  //       {name: 'Max 2', text: 'lorem 1'},
  //       {name: 'Max 2', text: 'lorem 2'},
  //       {name: 'Max 2', text: 'lorem 3'},
  //     ]
  //   },
  //
  // ]

  // now: Date = new Date()
// }
