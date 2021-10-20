import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BookstoreService } from '../../../services/bookstore.service';
import { BookstoreDto } from '../../../interfaces/bookstore.Dto';



@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-books.component.html',
    styleUrls: ['./edit-books.component.css']
})
export class EditBookComponent implements OnInit {

  book: BookstoreDto;
    bookstoreForm: FormGroup;

    constructor(private route: ActivatedRoute, private bookstoreService: BookstoreService,
        private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {

        this.bookstoreForm = this.formBuilder.group({
          dateOfPublish: '',
          language: '',
          author: '',
          title: '',
          _id:''

            
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.bookstoreService.GetBookById(params.get('_id'))
                .subscribe((book: BookstoreDto) => {
                    this.book = book;
                    console.log(`${this.book.title}`);
                });
        });
    }

    /* For Modify */
    onBookEdit(id: string, bookstoreData: BookstoreDto): void {
        console.warn(`Book Edit Request for Id: ${id}`);

        this.bookstoreService.EditBookById(id, bookstoreData).subscribe(res => {
            console.log('Book Modified!')
            this.ngZone.run(() => this.router.navigateByUrl('/books'))
        });
    }

}
