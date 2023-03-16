import {Component} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string
  text: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = ''
  searchField = 'title'
  post: Post[] = [
    {title: 'Milk', text: 'The best milk in the world'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Cheese', text: 'The best cheese in the world'}
  ]
  addPost() {
    this.post.unshift({
      title: 'Angular',
      text: 'Angular pipes'
    })
  }
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })


  date: Observable<Date> = new Observable(obs => {
    setInterval( () => {
      obs.next(new Date())
    }, 1000)
  })
 }


