import { Component, OnInit } from '@angular/core';

import { BookstoreService } from '../../../services/bookstore.service';
import { BookstoreDto } from '../../../interfaces/bookstore.Dto';

@Component({
  selector: 'app-bookstore-list',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class BookstoreListComponent implements OnInit {
  booksList: BookstoreDto[] = [];

  constructor(private bookstoreService: BookstoreService) {}

  ngOnInit(): void {
    this.loadAllBooks();
  }

  loadAllBooks() {
    this.bookstoreService.GetAllBooks()
    .subscribe((data: BookstoreDto[]) => {
      this.booksList = data;
      console.log(this.booksList);
    });
  }
}
