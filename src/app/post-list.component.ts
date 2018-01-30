import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { Comment } from './comment';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {
   posts: Post[];
   comments: Comment[];

   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {}

   ngOnInit(): void {
      this.postService.getAllPosts().subscribe(data => this.posts = data);
      this.comments = [];
   }

   getComments(index: number): void {
      var id = index + 1;
   	this.postService.getCommentsForPost(id).subscribe(data => this.comments = data);
      this.printComments(this.comments);
   }

   printComments(comments: Comment[]): void {
   	for (var i = comments.length - 1; i >= 0; i--) {
   		console.log(comments[i]);
   	}
   }
}
