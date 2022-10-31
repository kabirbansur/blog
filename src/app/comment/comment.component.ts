import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../shared/interfaces/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment = {id: 0, body: '', post_id: 0, email: '', name: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

}
