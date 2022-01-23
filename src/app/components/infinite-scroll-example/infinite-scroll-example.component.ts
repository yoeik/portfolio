import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-example',
  templateUrl: './infinite-scroll-example.component.html',
  styleUrls: ['./infinite-scroll-example.component.css']
})
export class InfiniteScrollExampleComponent implements OnInit {
   showGoUpButton: boolean;
   showHomeButton: boolean;

  constructor() {
    this.showGoUpButton =false
    this.showHomeButton =true
   }

  ngOnInit(): void {
  }
  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }
  

showScrollHeight = 50;
hideScrollHeight = 200;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
      this.showHomeButton = false;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
      this.showHomeButton = true;
    }
  }
 
}
