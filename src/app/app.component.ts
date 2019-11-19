import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyAt6yUyJgBpxsIjaJRjnyfrvBxAc39G7FI',
      authDomain: 'posts-blog-4873b.firebaseapp.com',
      databaseURL: 'https://posts-blog-4873b.firebaseio.com',
      projectId: 'posts-blog-4873b',
      storageBucket: 'posts-blog-4873b.appspot.com',
      messagingSenderId: '489931903232',
      appId: '1:489931903232:web:382b5418ca71d0b516a3e5',
      measurementId: 'G-1GDV2QZ7SJ'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
