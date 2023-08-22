import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-app';
  sayHello : string = 'Hello';
  private _filter: string = 'Hello';
  // filter: string = 'Hello';

  ngOnInit() {}

  // changeFilter (message: any) {

  //   this.filter = message;
  //   console.log("Input:: ", message);
  // }

  public get filter (): string {
    return this._filter;
  }

  public set filter (message: string) {

    console.log(message);
    
    this._filter = message;
  }

}
