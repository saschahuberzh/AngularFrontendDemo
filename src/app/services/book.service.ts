import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = "http://localhost:8080/books";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiServerUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiServerUrl}`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiServerUrl}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }
}
