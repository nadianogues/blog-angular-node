import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() author: string;
  @Input() date: string;
  @Input() title: string;
  @Input() comments: string;
  randomValue: string;

  getImageSrc(){
    return "https://picsum.photos/1024/400/?random=" + this.randomValue;
  }

  constructor() { }

  ngOnInit() {
    // Value definied here to avoid the error ExpressionChangedAfterItHasBeenCheckedError
    this.randomValue = Math.floor((Math.random() * 100) + 1).toString();
  }

}
