import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountain-city',
  templateUrl: './mountain-city.component.html',
  styleUrls: ['./mountain-city.component.scss']
})
export class MountainCityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleLighting(): void {
    document.querySelector( "#retrobg" )!.classList.toggle( "retrobg-shutdown" );
  }

}
