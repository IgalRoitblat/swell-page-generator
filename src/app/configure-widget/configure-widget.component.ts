import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';
import { WidgetsService } from '../Services/widgets.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-configure-widget',
  templateUrl: './configure-widget.component.html',
  styleUrls: ['./configure-widget.component.scss']
})
export class ConfigureWidgetComponent implements OnInit {
	@Input() widget;
	@Input() index;
	@ViewChild('saveWidget', {static: false}) saveWidget: ElementRef;
	private primaryInputs = [];
	private secondaryInputs = [];
	private isSecondaryExpanded = false;
	private pageCreationStep = 1;

	constructor(private UserConfigurationService: UserConfigurationService, private WidgetsService: WidgetsService) { }

	register(form) {
	if (!this.UserConfigurationService.doesWidgetExistInSelection(this.widget)) {
		this.UserConfigurationService.addWidgetToConfigured(this.widget, form);
	} else {
		this.UserConfigurationService.removeWidgetFromConfigured(this.widget);
		this.UserConfigurationService.addWidgetToConfigured(this.widget, form);
	}
	this.saveWidget.nativeElement.textContent = "Saved!"
	}

	isConfigurationInitiated() {
		return this.pageCreationStep === this.index + 1
	}

	secondaryToggle(e) {
		this.isSecondaryExpanded = !this.isSecondaryExpanded;
	}

	splitInputsToCategories(widget, configType) {
		return widget.configuration.filter(input => input.configType === configType);
	}

  ngOnInit() {
  	this.primaryInputs =  this.splitInputsToCategories(this.widget, "primary");
  	this.secondaryInputs = this.splitInputsToCategories(this.widget, "secondary");
  	this.UserConfigurationService.pageCreationStep.subscribe(step => this.pageCreationStep = step);
  }

}
