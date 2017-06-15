import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteArr = [];
  arrLength = 0;

  invokeAddQuote(newquote){
    this.quoteArr.push(newquote);
    this.arrLength += 1;
  }
  addVote(quote){ quote.votes += 1; }
  subVote(quote) {
    if (quote.votes > 0){
      quote.votes -= 1;
    }
  }
  delQuote(quote){
    for (var i = 0; i < this.arrLength; i++){
      console.log(this.quoteArr[i]);
      if (this.quoteArr[i] == quote){
        this.quoteArr.splice(i, 1);
        this.arrLength -= 1;
      }
    }
  }

  constructor() {
  }
  ngOnInit() {
  }
}
