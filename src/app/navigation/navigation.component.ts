import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild("getStartedPrompt", {static: false}) getStartedPrompt: ElementRef;
  constructor() { }

  onGetStarted() {
  	console.log("click")
  	this.getStartedPrompt.nativeElement.style.display = 'none';
  }

  ngOnInit() {
  }

}
