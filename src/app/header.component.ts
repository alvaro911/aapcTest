import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-header',
  templateUrl: './header.component.html',
  styles: [`
          button{background-color:rgb(184, 43, 207)}

          .btnLink{
            background-color:white;
            cursor:pointer;
            -webkit-transition:all .2s ease;
            -moz-transition:all .2s ease;
            -ms-transition:all .2s ease;
            -o-transition:all .2s ease;
            transition:all .2s ease;
          }

          .btnLink:hover{
            background-color:rgba(91, 91, 91, 0.29)
          }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
