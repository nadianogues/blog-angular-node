import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() author: string;
  @Input() date: string;
  @Input() title: string;
  @Input() comments: string;
  randomValue: string;

  getImageSrc(){
    return "https://picsum.photos/1024/777/?random=" + this.randomValue;
  }

  constructor() { }

  ngOnInit() {
    // Value definied here to avoid the error ExpressionChangedAfterItHasBeenCheckedError
    this.randomValue = Math.floor((Math.random() * 100) + 1).toString();
  }

}
