import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  book = {} as Book;

  constructor(private bookService: BookService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }

  submitBtn(): void{
    this.bookService.addBook(this.book).subscribe(
      response => {
        this.book = response;
        this.clear();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  clear(): void{
    this.book = {} as Book;
  }

  back(): void{
    this.location.back();
  }

}
