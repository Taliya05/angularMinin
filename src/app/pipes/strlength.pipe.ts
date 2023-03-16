import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'strlength'
})
export class StrlengthPipe implements PipeTransform {

  transform(val: string = 'text',  ...args: unknown[]):string {
    if (val.length > 10) {
      return val.slice(0, 10) + ' ...'
    } else {
      return val
    }


  }

}
