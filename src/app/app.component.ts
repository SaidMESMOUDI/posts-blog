import { Component } from '@angular/core';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aut autem beatae distinctio eligendi expedita, facere fuga illum ipsum labore perspiciatis, quia quis quod rerum saepe veniam vero vitae.', 1),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aut autem beatae distinctio eligendi expedita, facere fuga illum ipsum labore perspiciatis, quia quis quod rerum saepe veniam vero vitae.', -1) ,
    new Post( 'Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aut autem beatae distinctio eligendi expedita, facere fuga illum ipsum labore perspiciatis, quia quis quod rerum saepe veniam vero vitae.', 0),
    new Post( 'Mon quatrième post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aut autem beatae distinctio eligendi expedita, facere fuga illum ipsum labore perspiciatis, quia quis quod rerum saepe veniam vero vitae.', 1)
    ];

}
