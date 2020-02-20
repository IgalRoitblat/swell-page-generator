import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {
	public selectedWidgets = [];
	public pageCreationStep = 1;
	public configuredWidgets = [];
	public userGeneratedCode = false;
	public generatedPageString = '';
	public shareLinksObject = {};
	public shareLinksOptions = ["facebook", "instagram", "sms", "twitter", "copylink", "message"];

	generatePageHTML() {
		let pageString = '';
		this.configuredWidgets.forEach(widget => {
			pageString = pageString + `\n<div class="${widget.className}"\n`
			Object.entries(widget).forEach(entry => {
				if (entry[0] !== 'className' && entry[0] !== 'id') {
					if (this.shareLinksOptions.indexOf(entry[0]) !== -1) {
						this.shareLinksObject[entry[0]] = entry[1];
					} else {
						pageString = pageString + `data-${entry[0]}="${entry[1]}"\n`
					}
				}
			});
			if (this.concatShareLinks() !== '' && widget.id == 3) {
				pageString = pageString + `data-swell-referral-share-links="${this.concatShareLinks()}"\n`
			}
			pageString = pageString + '></div>\n'
		});
		this.generatedPageString = pageString;
		this.userGeneratedCode = true;
	}
	concatShareLinks() {
		let stringToReturn = '';
		Object.entries(this.shareLinksObject).forEach(entry => {
			if (entry[1] !== false) {
				stringToReturn = stringToReturn + entry[0] + ',';
			}
		})
		return stringToReturn.substring(0, stringToReturn.length - 1);
	}
  constructor() { }
}
