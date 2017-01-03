import { Component, OnInit, Input } from '@angular/core';
import { Puppies } from '../puppies'
@Component({
  selector: 'hz-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css']
})
export class PuppyComponent implements OnInit {
  @Input() puppyItem:Puppies
  constructor() { }

  ngOnInit() {
  }

}
