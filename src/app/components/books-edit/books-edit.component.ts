import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
  book = {} as Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.bookService.getBookById(id).subscribe(
      (response: Book) => {
        this.book = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submitBtn(): void {
    this.bookService.updateBook(this.book).subscribe(
      (response: Book) => {
        this.book = response;
        this.location.back();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  back(): void {
    this.location.back();
  }

}
