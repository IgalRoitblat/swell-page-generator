import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {
	public selectedWidgets = new BehaviorSubject([]);
  public pageCreationStep = new BehaviorSubject(1);
	public configuredWidgets = [];
	public userGeneratedCode = new BehaviorSubject(false);
	public generatedPageString = new BehaviorSubject('');
	public shareLinksObject = {};
	public shareLinksOptions = ["facebook", "instagram", "sms", "twitter", "copylink", "message"];

  constructor() { }

  generatePageHTML() {
  	let pageString = '';
  	this.configuredWidgets.forEach(widget => {
  		pageString = `${pageString} \n<div class="${widget.className}"\n`
  		Object.entries(widget).forEach(entry => {
  			if (entry[0] !== 'className' && entry[0] !== 'id') {
  				if (this.shareLinksOptions.indexOf(entry[0]) !== -1) {
  					this.shareLinksObject[entry[0]] = entry[1];
  				} else {
  					pageString = `${pageString} data-${entry[0]}="${entry[1]}"\n`
  				}
  			}
  		});
  		if (this.concatShareLinks() !== '' && widget.className == 'swell-referral') {
  			pageString = `${pageString} data-swell-referral-share-links="${this.concatShareLinks()}"\n`
  		}
  		pageString = `${pageString} ></div>\n`
  	});
  	this.generatedPageString.next(pageString);
  	this.userGeneratedCode.next(true);
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

  doesWidgetExistInSelection(widget) {
    return this.configuredWidgets.map(confWidget => confWidget.id).indexOf(widget.id) === -1;
  }

  addWidgetToConfigured(widget, form) {
    this.configuredWidgets.push({...this.stripEmptyValues(Object.entries(form.value)), className: widget.className, id: widget.id});
  }

  removeWidgetFromConfigured(widget) {
    this.configuredWidgets = this.configuredWidgets.filter(confWidget => confWidget.id !== widget.id);
  }

  addWidgetToSelection(widget) {
    this.selectedWidgets.next([...this.selectedWidgets.value, widget]);
  }

  removeWidgetFromSelection(selectedWidget) {
    this.selectedWidgets.next(this.selectedWidgets.value.filter(widget => widget.id !== selectedWidget.id))
  }

  skipToNextPage() {
    this.pageCreationStep.next(this.pageCreationStep.getValue() + 1);
  }

  skipToPrevPage() {
    this.pageCreationStep.next(this.pageCreationStep.getValue() - 1);
  }

  startOver() {
    this.pageCreationStep.next(1);
    this.userGeneratedCode.next(false);
    this.configuredWidgets = [];
  }

  stripEmptyValues(object) {
    let strippedObject = {};
    object.forEach(entry => {
      if (entry[1] !== "") {
        strippedObject[entry[0]] = entry[1]
      };
    })
    return strippedObject;
  }

}
