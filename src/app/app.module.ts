import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { HeroComponent } from './hero/hero.component';
import { BackgroundMenuComponent } from './background-menu/background-menu.component';

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
    HeroComponent,
    BackgroundMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
