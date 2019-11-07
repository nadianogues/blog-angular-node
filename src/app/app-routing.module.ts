import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = 
[
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'post/:id',
    component: PostPageComponent
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: 'contact', 
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
