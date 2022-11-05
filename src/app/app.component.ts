import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count = 1;

  ngOnInit() {
    setInterval(() => {
      this.count++;
    }, 2000);
  }
}
