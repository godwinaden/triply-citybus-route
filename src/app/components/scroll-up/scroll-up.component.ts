import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent implements OnInit{

  windowScrolled: boolean | undefined;


  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageXOffset > 100 || document.body.scrollTop > 100;
    });
  }

  scrollUp(): void{
    (function smoothScroll() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
    alert();
  }

}
