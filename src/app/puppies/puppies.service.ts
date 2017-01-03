import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Puppies } from './puppies';
import 'rxjs/Rx';


@Injectable()
export class PuppiesService {
  private puppies:Puppies[]=[]
  constructor( private jsonp:Jsonp) { }

  searchPuppyData(zipCode:string, size:string){
    return this.jsonp.get('http://api.petfinder.com/pet.find?key=03d28565920b79caecb0ad3898937475&animal=dog&age=baby&count=24&format=json&callback=JSONP_CALLBACK&location=' + zipCode + '&size=' + size)
      .map((response:Response) => response.json());
  }

  getPuppies(){
    return this.puppies;
  }

  addPuppies(puppy: Puppies){
    this.puppies.push(puppy);
  }

  clearPuppies(){
    this.puppies.splice(0, this.puppies.length);
  }
}
