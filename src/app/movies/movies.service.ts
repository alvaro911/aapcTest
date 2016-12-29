import { Injectable } from '@angular/core';
import { Movies } from './movies';
@Injectable()
export class MoviesService {
  movies: Movies[]=[
    new Movies('Deadpool', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOEO7WvIlsFfZRTqzXiKmL65nIK9tn-T0VHom5vmJxSndmeNW-4A', 'Based upon the Marvel Comics anti-hero, Deadpool is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with new abilities and a dark and twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. [20th Century Fox] ', 7),
    new Movies('DeepWater Horizon', 'http://www.garuyo.com/sites/default/files/2016/06/moana-disney-primer-trailer.jpg', 'Moana, a spirited teenager and born navigator, sets sail from the ancient South Pacific islands of Oceania in search of a fabled island. During her incredible journey, she teams up with her hero, the legendary demi-god Maui, to traverse the open ocean on an action-packed voyage, encountering enormous sea creatures, breathtaking underworlds and ancient folklore. [Walt Disney Studios]', 8),
    new Movies('Hacksaw Ridge', 'http://film-reviews-and-news.com/sites/default/files/field/image/hacksaw-ridge-.jpg', 'In Okinawa during the bloodiest battle of WWII, Desmond Doss (Andrew Garfield) saved 75 men without firing or carrying a gun. He was the only American soldier in WWII to fight on the front lines without a weapon, as he believed that while the war was justified, killing was nevertheless wrong. As an army medic, he single-handedly evacuated the wounded from behind enemy lines, braved fire while tending to soldiers and was wounded by a grenade and hit by snipers. Doss was the first conscientious objector awarded the Congressional Medal of Honor.', 8),
    new Movies('Civil War', 'http://english-artists.net/wp-content/uploads/movies-captain-america-3-civil-war-movie-poster-hd-wallpaper-quotes-20160526152801-5746b391d773b-800x600.jpg', 'Captain America: Civil War picks up where Avengers: Age of Ultron left off, as Steve Rogers leads the new team of Avengers in their continued efforts to safeguard humanity. After another international incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability and a governing body to determine when to enlist the services of the team. The new status quo fractures the Avengers while they try to protect the world from a new and nefarious villain. [Marvel]', 6)
  ];
  constructor() { }
  getMovies(){
    return this.movies;
  }

  getMovie(id:number){
    return this.movies[id];
  }
}
