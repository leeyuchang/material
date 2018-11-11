import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test';
  safeUrl: SafeResourceUrl;
  testUrl;

  // url = 'https://drive.google.com/file/d/0BxGYc7xBfIYbQ3pPRGlVWDgzbWVPQ1BzTWpzRlBRWVNINFVn/view?usp=sharing';
     url = 'https://drive.google.com/file/d/0BxGYc7xBfIYbQ3pPRGlVWDgzbWVPQ1BzTWpzRlBRWVNINFVn/preview';

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.testUrl = this.sanitizer.bypassSecurityTrustHtml(this.url);
  }

}
