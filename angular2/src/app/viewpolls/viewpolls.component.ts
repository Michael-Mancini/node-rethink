import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-viewpolls',
  templateUrl: './viewpolls.component.html',
  styleUrls: ['./viewpolls.component.css']
})
export class ViewpollsComponent implements OnInit {
  testArray = [{
    option: 'bananas'
  },{
    option: 'strawberries'
  },{
    option: 'pinneapples'
  }];
  votert: string;

  constructor() { }

  ngOnInit() {
  }

}
