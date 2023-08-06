import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  inputTxt: any = '';
  inputTxt2: any = '';
  inputTxt3: any;

  // constructor(data: any) {
  //   this.inputTxt = new this.inputTxt();
  //   this.inputTxt = data;
  // }

  txtChng(txt: any) {
    this.inputTxt2 = txt;
  }

  txtchngonBtn() {
    this.inputTxt3 = 'Hello master bruce';
  }
}
