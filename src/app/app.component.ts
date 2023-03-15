import {Component} from '@angular/core';

export interface Post  {
  title: string
  text: string
  id?: number
  date?: Date
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = true
  // @ts-ignore
  posts: Post[] = [
    {title: 'I want to learn Angular', text: 'I am still learning Angular', id: 1,
      date: new Date(2023, 2, 13, 3, 24, 0)},
    {title: 'Directives and pipes', text: 'Learning directives and pipes', id: 2, date: new Date()}
  ]

  updatePosts(post: Post) {
    // this.posts.unshift(post)
    let maxId = 0
    this.posts.forEach(value => {
      if (value.id && value.id > maxId) {
        maxId = value.id
      }
    })
   this.posts = [...this.posts, {id: maxId + 1, date: post.date, title: post.title, text: post.text}]
  }

  removePost(id: number) {
    console.log('Id to remove', id)
    this.posts = this.posts.filter(p => p.id !== id)

  }
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


