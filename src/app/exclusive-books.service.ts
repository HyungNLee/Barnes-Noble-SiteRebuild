import { Injectable } from '@angular/core';
import { Book } from './models/books.model';
import { BOOKLIST } from './mock-slick-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ExclusiveBooksService {

  bookList: FirebaseListObservable<any[]>;
  convertedBookList: Book[] = [];

  constructor(private database: AngularFireDatabase) {
    this.bookList = this.database.list('exclusive_list');
  }

  getExclusiveBookList() {
    return this.bookList;
  }
}
