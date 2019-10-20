import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() author: String;

  public clearTextArea(event){
    let text: String = event.currentTarget.value.replace(/\s/g, '');
    if(text == 'Writearesponse...'){
      event.currentTarget.value = '';
    }
  }

  public leftTextArea(event){
    let text: String = event.currentTarget.value.replace(/\s/g, '');
    if(text == ''){
      event.currentTarget.value = "Write a response...";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
