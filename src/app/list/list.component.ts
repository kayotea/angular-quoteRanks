import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() allQuotes;
  @Output() addVote = new EventEmitter();
  @Output() subVote = new EventEmitter();
  @Output() delQuote = new EventEmitter();

  upVote(quote) { this.addVote.emit(quote); }
  downVote(quote) { this.subVote.emit(quote); }
  deleteQuote(quote) { this.delQuote.emit(quote); }

  constructor() {}
  ngOnInit() {}
}