import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';

@Component({
  selector: 'app-code-output',
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.scss']
})
export class CodeOutputComponent implements OnInit {
	@ViewChild('copyCode', {static: false}) copyCode: ElementRef;
	private generatedPageString = '';
	constructor(private UserConfigurationService: UserConfigurationService) { }

	onCopyCode() {
		console.log("Copied!");
		navigator.clipboard.writeText(this.generatedPageString);
		this.copyCode.nativeElement.textContent = "Copied!"
	}

  	ngOnInit() {
  		this.UserConfigurationService.generatedPageString.subscribe(value => {
  			this.generatedPageString = value;
  		})
  	}

}
