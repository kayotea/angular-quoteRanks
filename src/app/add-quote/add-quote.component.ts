import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() formSubmission = new EventEmitter();

  newquote = new Quote;

  //get quote data
  onSubmit(){
    this.passQuoteToParent();
    return false;
  }
  //send new quote to parent to temp store
  passQuoteToParent(){
    this.formSubmission.emit(this.newquote);
    this.newquote = new Quote;
  }
  constructor() {}
  ngOnInit() {}
}

class Quote {
  public text: string = "";
  public author: string = "";
  public votes: number = 0;
}