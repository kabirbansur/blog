import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Post} from '../shared/interfaces/post';
import {ApiService} from "../shared/services/api.service";
import {LocalStorageService} from "../shared/services/local-storage.service";
import {User} from "../shared/interfaces/user";
import {Comment} from "../shared/interfaces/comment";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit {
  post: Post;
  user: User;
  comments: Comment[] = [];

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.localStorageService.changeCurrentPostDetail(this.localStorageService.getCurrentPost());
    this.localStorageService.changeCurrentUserDetail(this.localStorageService.getCurrentUser());
    this.localStorageService.currentPost.subscribe(post => this.post = post);
    this.localStorageService.currentUser.subscribe(user => this.user = user);
  }

  ngAfterViewInit() {
    this.apiService.get('comments', {post_id: this.post.id}).subscribe({
      next: (res) => this.comments = res,
      error: (error) => console.error(error)
    });
  }
}
