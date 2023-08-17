import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './blog/article/article.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BgSizePipe } from './pipes/bg-size.pipe';
import { WordPipe } from './pipes/word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    NotFoundComponent,
    HomeComponent,
    BlogComponent,
    ArticleComponent,
    HighlightDirective,
    BgSizePipe,
    WordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
