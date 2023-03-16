import {Component} from '@angular/core';

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

 }


