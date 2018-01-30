import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';

@Injectable()
export class PostService {
   constructor(private http: HttpClient) {

   }

   // get all posts
   getAllPosts(): Observable<Post[]> {
   	var url = "http://jsonplaceholder.typicode.com/posts";
    return this.http.get<Post[]>(url);
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
   	var url = "http://jsonplaceholder.typicode.com/posts/" + index + "/comments";
    return this.http.get<Comment[]>(url);
   }
}
