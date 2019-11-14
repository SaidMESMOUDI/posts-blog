import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postList: Post[];


  constructor() { }

  ngOnInit() {
  }

  onLoveIt(i: number) {
    return this.postList[i].loveIts++;
    console.log(this.postList[i].loveIts);
  }

  onDontLoveIt(i: number) {
    return this.postList[i].loveIts--;
  }

}
