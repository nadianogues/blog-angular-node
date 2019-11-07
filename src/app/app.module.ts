import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { BackgroundMenuComponent } from './background-menu/background-menu.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PaginationComponent } from './pagination/pagination.component';

// Pipe
import { ReducedDescription } from './util/reduced.description.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    AddCommentComponent,
    LoginComponent,
    MenuComponent,
    PostPageComponent,
    PostItemComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HeroComponent,
    BackgroundMenuComponent,
    NewPostComponent,
    NewUserComponent,
    ReducedDescription,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
