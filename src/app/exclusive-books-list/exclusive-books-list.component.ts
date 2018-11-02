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

  bookList: FirebaseListObservable<any[]>;
  convertedBookList: Book[] = [];

  constructor(private exclusiveBookService: ExclusiveBooksService) { }

  ngOnInit() {
    this.bookList = this.exclusiveBookService.getExclusiveBookList()
    setTimeout(() => {
      initializeSlick();
    }, 1000);

    }
    // this.bookList.forEach(element => {
    //   let newBook = new Book(element[0], element[1], element[2], element[3]);
    //   this.convertedBookList.push(newBook);
    // });
  }
