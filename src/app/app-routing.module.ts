import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './blog/article/article.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { 
    path: 'contact',
    component: ContactUsComponent,
    title: 'Contact page title'
  },
  { path: 'contact-us', redirectTo: '/contact'},


  { path: 'about-us', component: AboutUsComponent, title: 'About us' },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog Page',
    children: [
      { path: 'articles/:name', component: ArticleComponent },
      { path: 'articles/:name', component: ArticleComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
