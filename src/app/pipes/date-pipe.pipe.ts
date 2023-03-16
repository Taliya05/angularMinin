import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {

    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }

    console.log(value.toLocaleString("ru", options))
    if (value.getDate() == new Date().getDate() && value.getMonth() == new Date().getMonth() && value.getFullYear() == new Date().getFullYear()) {
      return "Today " + value.toLocaleString("en-US", {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
    } else if (value.getDate() + 1 == new Date().getDate()) {
      return 'Yesterday ' + value.toLocaleString("en-US", {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
    } else {
      return value.toLocaleString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }
  }

}
