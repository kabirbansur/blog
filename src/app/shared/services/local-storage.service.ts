import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';
import {Post} from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public userDetails = new BehaviorSubject<User>(null);
  currentUser = this.userDetails.asObservable();
  public postDetails = new BehaviorSubject<Post>(null);
  currentPost = this.postDetails.asObservable();


  constructor() {
  }

  setItem(key, data): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to Session Storage', e);
      return null;
    }
  }

  getLocalStorage(key): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data Session Data', e);
      return null;
    }
  }

  getCurrentUser(): any {
    return this.getLocalStorage('userDetails');
  }

  getCurrentPost(): Post {
    return this.getLocalStorage('postDetails');
  }

  changeCurrentUserDetail(user: User) {
    this.userDetails.next(user);
  }

  changeCurrentPostDetail(post: Post) {
    this.postDetails.next(post);
  }

}
