import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  host: {
      class:'app-about'
  },
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private links = [
    {
      name: 'jquery',
      link: '<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>',
      desc: 'To get started, please make sure the page has JQuery installed:'
    },
    {
      name: 'psJS',
      link: '<script src="https://swell-assets-candidates.yotpo.com/swell-rewards.js"></script>',
      desc: 'Next, add our JS library to your page:'
    },
    {
      name: 'slickCarousel',
      link: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">',
      desc: 'If you are creating VIP tiers or redemption options, you will need to add Slick Carousel CSS:'
    },
    {
      name: 'fontAwesome',
      link: '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">',
      desc: 'Finally, make sure your pages have Font Awesome implemented:'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
