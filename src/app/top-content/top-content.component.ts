import { Component, OnInit, Input } from '@angular/core';
import { TopContent } from '../Models/TopContent';
import { Actor } from '../Models/Actor';
@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.topContent.title)
  }
  @Input() topContent: TopContent;

}
