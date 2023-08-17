import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  slug: string = '';

  constructor (
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    // const { params, queryParams } = this.route.snapshot;
    const params = this.route.snapshot.params;
    const queryParams = this.route.snapshot.queryParams;
    this.slug = `Slug: ${params['name']} & id: ${queryParams['id']}`;
  }
}
