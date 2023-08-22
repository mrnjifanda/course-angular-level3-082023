import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './blog/article/article.component';
import { Level3Component } from './level3/level3.component';
import { NotesComponent } from './level3/notes/notes.component';
import { UsersComponent } from './users/users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id', component: UserDetailsComponent }
  ]},
  {
    path: 'level3',
    component: Level3Component,
    title: 'My level 3 class',
    children: [
      { path: 'notes', component: NotesComponent, title: 'Users notes' }
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'Page not found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// { path: '', component: HomeComponent},
// { 
//   path: 'contact',
//   component: ContactUsComponent,
//   title: 'Contact page title'
// },
// { path: 'contact-us', redirectTo: '/contact'},


// { path: 'about-us', component: AboutUsComponent, title: 'About us' },
// {
//   path: 'blog',
//   component: BlogComponent,
//   title: 'Blog Page',
//   children: [
//     { path: 'articles/:name', component: ArticleComponent },
//     { path: 'articles/:name', component: ArticleComponent },
//   ]
// },
// { path: '**', component: NotFoundComponent },


