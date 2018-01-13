import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data;
  constructor(private httpClient: HttpClient){}
  getPost(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      (data) => this.data = data
    )
  }
  ngOnInit(){
    this.getPost();
  }
}
