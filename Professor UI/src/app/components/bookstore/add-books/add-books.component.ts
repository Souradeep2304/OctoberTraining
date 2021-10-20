import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { BookstoreService } from '../../../services/bookstore.service';
import { BookstoreDto } from '../../../interfaces/bookstore.Dto';
import { AddBookstoreDto } from '../../../interfaces/bookstore.Dto';


@Component({
  selector: 'app-bookstore-add',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css'],
})
export class BookstoreAddComponent implements OnInit {
  book: AddBookstoreDto;
  bookstoreForm: FormGroup;

  

  constructor(private route: ActivatedRoute, private bookstoreService: BookstoreService,
    private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {
    this.bookstoreForm = this.formBuilder.group({
      language: '',
      author: '',
      title: '',
      dateOfPublish:''
   
  });
  }

  ngOnInit(): void {
  
  }
  onBookAdd(bookData: AddBookstoreDto): void {

    this.bookstoreService.AddBooks(bookData).subscribe(res => {
       
        console.log('Book Added!')
        this.ngZone.run(() => this.router.navigateByUrl('/books'))
    });
  
}
}
