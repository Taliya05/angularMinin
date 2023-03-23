import {PipeTransform} from "@angular/core";


export class PageNamePipe implements PipeTransform {
  transform(value: string): string {
    return value + '!!!'
  }
}
