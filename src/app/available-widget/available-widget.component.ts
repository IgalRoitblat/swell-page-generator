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
		this.selected = !this.selected;
		this.selected ? this.addWidgetToSelection() : this.removeWidgetFromSelection();

	}

	addWidgetToSelection() {
		this.UserConfigurationService.addWidgetToSelection(this.widget);
	}

	removeWidgetFromSelection() {
		this.UserConfigurationService.removeWidgetFromSelection(this.widget);
	}

	ngOnInit() {
		if (this.UserConfigurationService.selectedWidgets.value.map(widget => widget.id).indexOf(this.widget.id) !== -1) {
			this.selected = true;
		}
	}

}
