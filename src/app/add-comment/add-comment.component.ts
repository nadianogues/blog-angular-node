import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { CommentService } from '../comment.service';
import { FormGroup, FormControl } from '@angular/forms'
import { User } from '../shared/user.model'
import { Comment } from '../shared/comment.model'
import {Router, ActivatedRoute} from "@angular/router"


@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
  providers: [CommentService]
})
export class AddCommentComponent implements OnInit {
  @Input() author: String;
  public addCommentForm:FormGroup = new FormGroup
  (
    {
      'comment': new FormControl(""),
    }
  )

  constructor(private loginService: LoginService, 
              private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router)  { 
  }

  ngOnInit() { }

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

  public addComment(): void{
    let comment = new Comment()
      comment.author_id = this.loginService.user.id
      comment.author = this.loginService.user.name
      comment.content = this.addCommentForm.value.comment
      let postId = parseInt(this.route.snapshot.paramMap.get("id"))
      this.commentService.addComment(comment, postId).subscribe(
        (error:boolean)=>{
          if(!error){
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/post/', 11]);
            }); 
            /*this.router.navigate(['/post/', 10]).then(nav => {
              console.log(nav); // true if navigation is successful
            }, err => {
              console.log(err) // when there's an error
            });*/
          } else {
            alert("Failed to add comment")
          }
        }
      )
  }

}
