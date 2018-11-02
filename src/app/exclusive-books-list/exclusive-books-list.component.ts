import { Component, OnInit } from '@angular/core';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-exclusive-books-list',
  templateUrl: './exclusive-books-list.component.html',
  styleUrls: ['./exclusive-books-list.component.css']
})
export class ExclusiveBooksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  bookList: Book[] = [
    new Book('Unsheltered', 'Barbara Kingsolver', '0', 'unsheltered.jpg'),
    new Book('Dear Evan Hansen: The Novel', 'Val Emmich', '0', 'dear-evan-hansen-the-novel.jpg'),
    new Book('Tales from a Not-So-Happy Birthday', 'Rachel Renee Russell', '4', 'tales-from-a-not-so-happy-birthday.jpg')
  ];

}
