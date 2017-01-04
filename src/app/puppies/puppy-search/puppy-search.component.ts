import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PuppiesService } from '../puppies.service';
import { Puppies } from '../puppies';
import 'rxjs/Rx';

@Component({
  selector: 'hz-puppy-search',
  templateUrl: './puppy-search.component.html',
  styleUrls: ['./puppy-search.component.css']
})
export class PuppySearchComponent implements OnInit {

  constructor(private puppiesService: PuppiesService) { }

  ngOnInit() {

  }

  onSubmit(puppyForm: NgForm){
    this.onClear();

    this.puppiesService.searchPuppyData(puppyForm.value.zipCode, puppyForm.value.size.toUpperCase()).subscribe(
      (data) => {
        console.log(data);
        for(let i=0; i<=data.petfinder.pets.pet.length ;i++){
          const puppy = new Puppies(data.petfinder.pets.pet[i].breeds.breed.$t, data.petfinder.pets.pet[i].media.photos.photo[2].$t, data.petfinder.pets.pet[i].name.$t, data.petfinder.pets.pet[i].sex.$t, data.petfinder.pets.pet[i].description.$t);
          this.puppiesService.addPuppies(puppy);
        }
      }
    )
    console.log('my number is', puppyForm);
  }

  onClear(){
    this.puppiesService.clearPuppies();
  }
}
