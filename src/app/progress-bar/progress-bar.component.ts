import { Component, OnInit } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
	public pageCreationStep = 1;
	private selectedWidgets = [];
  constructor(private UserConfigurationService: UserConfigurationService) { }

  ngOnInit() {
  	this.UserConfigurationService.pageCreationStep.subscribe(step => this.pageCreationStep = step);
  	this.UserConfigurationService.selectedWidgets.subscribe(widgets => this.selectedWidgets = widgets);
  }

}
