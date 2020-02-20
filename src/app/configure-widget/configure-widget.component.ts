import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';
import { WidgetsService } from '../Services/widgets.service';

@Component({
  selector: 'app-configure-widget',
  templateUrl: './configure-widget.component.html',
  styleUrls: ['./configure-widget.component.css']
})
export class ConfigureWidgetComponent implements OnInit {
	@Input() widget;
	@Input() index;
	@ViewChild('saveWidget', {static: false}) saveWidget: ElementRef;
	constructor(private UserConfigurationService: UserConfigurationService, private WidgetsService: WidgetsService) { }

	register(form) {
	if (this.UserConfigurationService.configuredWidgets.map(confWidget => confWidget.id).indexOf(this.widget.id) === -1) {
		this.UserConfigurationService.configuredWidgets.push({...this.stripEmptyValues(Object.entries(form.value)), className: this.widget.className, id: this.widget.id});
	} else {
		this.UserConfigurationService.configuredWidgets = this.UserConfigurationService.configuredWidgets.filter(confWidget => confWidget.id !== this.widget.id);
		this.UserConfigurationService.configuredWidgets.push({...this.stripEmptyValues(Object.entries(form.value)), className: this.widget.className, id: this.widget.id});
	}
	console.log(this.UserConfigurationService.configuredWidgets);
	this.saveWidget.nativeElement.textContent = "Saved!"
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

  ngOnInit() {
  }

}
