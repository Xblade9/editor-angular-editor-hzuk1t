import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  inputTxt: string = '';

  gettxt(txt: string) {
    console.log(txt);
    return (this.inputTxt = txt);
  }
}
