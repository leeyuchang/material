import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LowerCasePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-test';
  safeUrl: SafeResourceUrl;
  testUrl;

  initValue: number;
  rate: number;

  // url = 'https://drive.google.com/file/d/0BxGYc7xBfIYbQ3pPRGlVWDgzbWVPQ1BzTWpzRlBRWVNINFVn/view?usp=sharing';
  url = 'https://drive.google.com/file/d/0BxGYc7xBfIYbQ3pPRGlVWDgzbWVPQ1BzTWpzRlBRWVNINFVn/preview';

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.testUrl = this.sanitizer.bypassSecurityTrustHtml(this.url);
  }

  calc(): number {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }
    let answer: number = this.initValue;
    for (let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100);
    }
    return Math.floor(answer);
  }


  calcArray(): number[] {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }

    let answer: number = this.initValue;
    let ret: number[] = [10];

    for (let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100);
      ret.push(Math.floor(answer));
    }
    return ret;
  }

  clear(): void {
    localStorage.setItem('initValue', '0');
    localStorage.setItem('rate', '0');
    this.initValue = 0;
    this.rate = 0;
  }

  save(): void {
    localStorage.setItem('initValue', this.initValue.toString());
    localStorage.setItem('rate', this.rate.toString());
  }

  ngOnInit() {

    if (localStorage.getItem('initValue')) {
      this.initValue = Number(localStorage.getItem('initValue'));
      this.rate = Number(localStorage.getItem('rate'));
    } else {
      this.clear();
    }
  }
}



