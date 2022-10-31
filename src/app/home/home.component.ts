import {Component, OnInit} from '@angular/core';
import {Post} from '../shared/interfaces/post';
import {ApiService} from '../shared/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  posts: Post[] = [];
  loading = true;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.loading = true;
    this.apiService.get('posts', {page: this.page}).subscribe({
      next: (res) => this.posts = res,
      error: (error) => console.error(error),
      complete: () => this.loading = false
    });
  }

  goNext() {
    this.page += 1;
    this.getPost();
  }

  goPrevious() {
    this.page -= 1;
    this.getPost();
  }

}

