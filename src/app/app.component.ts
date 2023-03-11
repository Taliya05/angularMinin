import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMinin';
  number = 50;
  arr = [1, 2, 3];
  obj = {a: 1, b: {c: 2}, d: 3}

  inputValue = ''

  // img = 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png'

  constructor() {
  //   setTimeout(() => {
  //       console.log('Timeout is over')
  //       this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  //     }, 5000)
  }
  onInput(event: any) {
    console.log('Event',typeof event)
    if (event.keyCode === 13) {
      this.inputValue = (<HTMLInputElement>event.target).value
    }


  }

  onClick() {
    console.log('Click!')

  }

  onBlur(str: string) {
    this.inputValue = str
  }
}
