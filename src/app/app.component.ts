import {Component} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string
  text: string
  d: Date
  id?: number


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
    {title: 'Milk', text: 'The best milk in the world', d: new Date},
    {title: 'Bread', text: 'The best bread in the world', d: new Date(2023, 2, 15, 3, 24, 0)},
    {title: 'Cheese', text: 'The best cheese in the world', d: new Date(2023, 2, 13, 3, 24, 0)}
  ]
  addPost() {
    this.post.unshift({
      title: 'Angular',
      text: 'Angular pipes',
      d: new Date()

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


// сделай, чтобы если дата сегодняшнее,
// то выводило просто время,
// если вчерашенее, то Yesterday, hh:mm:ss
// А если позавчера и далее, то полное ГГ:ММ:ДД ЧЧ:мм:сс
// месяц полностью

// new Date(2023, 2, 13, 3, 24, 0)             2023, 2, 13, 3, 24, 0





