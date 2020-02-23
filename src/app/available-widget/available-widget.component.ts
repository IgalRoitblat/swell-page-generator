import { Component, OnInit, Input } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';

@Component({
  selector: 'app-available-widget',
  templateUrl: './available-widget.component.html',
  styleUrls: ['./available-widget.component.scss']
})
export class AvailableWidgetComponent implements OnInit {
	@Input() widget;
	public selected = false;
	constructor(private UserConfigurationService: UserConfigurationService) { 

	}

	onWidgetSelect() {
		console.log("clicked");
		this.selected = !this.selected;
		this.selected ? this.addWidgetToSelection() : this.removeWidgetFromSelection();
		console.log(this.UserConfigurationService.selectedWidgets);

	}

	addWidgetToSelection() {
		this.UserConfigurationService.selectedWidgets.push(this.widget)
	}

	removeWidgetFromSelection() {
		this.UserConfigurationService.selectedWidgets = this.UserConfigurationService.selectedWidgets.filter(widget => widget.id !== this.widget.id)
	}

	ngOnInit() {
		if (this.UserConfigurationService.selectedWidgets.map(widget => widget.id).indexOf(this.widget.id) !== -1) {
			this.selected = true;
		}
	}

}
