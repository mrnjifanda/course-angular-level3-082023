import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  articles = [
    {
      id: 1,
      title: "1er Lorem ipsum dolor",
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic ullam quas sunt voluptas repellat animi nam illum perspiciatis, voluptates dolore blanditiis quidem fugiat, non porro vitae commodi, molestiae officiis.',
      readmore: false
    },
    {
      id: 2,
      title: "2er Lorem ipsum dolor",
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic ullam quas sunt voluptas repellat animi nam illum perspiciatis, voluptates dolore blanditiis quidem fugiat, non porro vitae commodi, molestiae officiis.',
      readmore: false
    },
    {
      id: 3,
      title: "3er Lorem ipsum dolor",
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic ullam quas sunt voluptas repellat animi nam illum perspiciatis, voluptates dolore blanditiis quidem fugiat, non porro vitae commodi, molestiae officiis.',
      readmore: false
    },
    {
      id: 4,
      title: "4er Lorem ipsum dolor",
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic ullam quas sunt voluptas repellat animi nam illum perspiciatis, voluptates dolore blanditiis quidem fugiat, non porro vitae commodi, molestiae officiis.',
      readmore: false
    },
    {
      id: 5,
      title: "5er Lorem ipsum dolor",
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic ullam quas sunt voluptas repellat animi nam illum perspiciatis, voluptates dolore blanditiis quidem fugiat, non porro vitae commodi, molestiae officiis.',
      readmore: false
    }
  ];

  isActive: boolean = true;

  readMore(event: Event, index: number) {

    event.preventDefault();

    // this.articles[index].readmore = !this.articles[index].readmore;
    if (this.articles[index].readmore == true) {

      this.articles[index].readmore = false;
    } else {
      this.articles[index].readmore = true;
    }
    
  }
};
