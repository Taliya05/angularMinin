import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(post: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return post
    }
    return  post.filter(post => {
      // @ts-ignore
      return post[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
