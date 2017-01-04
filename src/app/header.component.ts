import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-header',
  templateUrl: './header.component.html',
  styles: [`
          .btnLink{
            cursor:pointer;
            -webkit-transition:all .2s ease;
            -moz-transition:all .2s ease;
            -ms-transition:all .2s ease;
            -o-transition:all .2s ease;
            transition:all .2s ease;
            height:100%;
            padding:0 2em;
            line-height:5.5em;
          }

          .btnLink:hover{
            background-color:#f8b195;
          }

          .active{
            background-color:#f67280;
          }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
