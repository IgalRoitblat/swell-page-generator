import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-link',
  templateUrl: './about-link.component.html',
  styleUrls: ['./about-link.component.scss']
})
export class AboutLinkComponent implements OnInit {
	@Input() link;
	@ViewChild('copyLink',{static:false}) copyLink: ElementRef;
	constructor() { }

	onCopyCode(text) {
  		console.log("Copied!");
  		this.copyLink.nativeElement.textContent = "Copied!";
  		navigator.clipboard.writeText(text);
	}

	ngOnInit() {
	}
}
