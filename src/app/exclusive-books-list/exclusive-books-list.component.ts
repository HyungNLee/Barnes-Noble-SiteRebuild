import { Component, OnInit } from '@angular/core';
import { Book } from '../models/books.model';
import { ExclusiveBooksService } from '../exclusive-books.service';
import { FirebaseListObservable } from 'angularfire2/database';
declare function initializeSlick(): any;

@Component({
  selector: 'app-exclusive-books-list',
  templateUrl: './exclusive-books-list.component.html',
  styleUrls: ['./exclusive-books-list.component.css'],
  providers: [ExclusiveBooksService]
})
export class ExclusiveBooksListComponent implements OnInit {

  bookList;
  convertedBookList: Book[] = [];

  constructor(private exclusiveBookService: ExclusiveBooksService) { }

  ngOnInit() {
    this.exclusiveBookService.getExclusiveBookList().subscribe(dataLastEmittedFromObserver => {
      this.bookList = dataLastEmittedFromObserver;
      this.bookList.forEach(element => {
        let newBook = new Book(element.title, element.author, element.starRating, element.bookImg);
        this.convertedBookList.push(newBook);
      });
    });
  }

  ngAfterViewInit() {
    initializeSlick();
  } 
}
