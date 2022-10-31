import {Component, OnInit, Input} from '@angular/core';
import {Route, Router} from '@angular/router';
import {Post} from '../shared/interfaces/post';
import {User} from '../shared/interfaces/user';
import {ApiService} from '../shared/services/api.service';
import {LocalStorageService} from "../shared/services/local-storage.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post = {id: 0, body: '', title: '', user_id: 0};
  @Input() user: User = {id: 0, email: '', gender: 'male', name: '', status: ''};
  @Input() viewDetail = true;

  constructor(private apiService: ApiService, private router: Router, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    if (this.viewDetail) {
      this.apiService.get(`users/${this.post.user_id}`).subscribe({
        next: (res) => this.user = res,
        error: (error) => console.error(error)
      });
    }
  }

  showDetail() {
    this.localStorageService.setItem('postDetails', this.post);
    this.localStorageService.setItem('userDetails', this.user);
    this.router.navigateByUrl(`/detail`);
  }
}
