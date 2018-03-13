import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {
  options = [];

  constructor() { }

  ngOnInit() {
  }

  addOption() {
    var optionNumber = this.options.length + 3;
    this.options.push({title: `Option${optionNumber}`});
  }

}
