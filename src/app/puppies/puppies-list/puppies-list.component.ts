import { Component, OnInit } from '@angular/core';
import { Puppies } from '../puppies'
import { PuppiesService } from '../puppies.service';

@Component({
  selector: 'hz-puppies-list',
  templateUrl: './puppies-list.component.html',
  styleUrls: ['./puppies-list.component.css']
})
export class PuppiesListComponent implements OnInit {
  puppiesList:Puppies[]=[]
  constructor(private puppiesService: PuppiesService) { }

  ngOnInit() {
    this.puppiesList = this.puppiesService.getPuppies()
  }

}
