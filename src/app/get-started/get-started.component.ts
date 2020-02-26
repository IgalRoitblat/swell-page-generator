import { Component, OnInit } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';
import { WidgetsService } from '../Services/widgets.service';

@Component({
  selector: 'app-get-started',
  host: {
      class:'app-get-started'
  },
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
	public pageCreationStep = 1;
	public selectedWidgets = null;
  private userGeneratedCode = false;
  constructor(private UserConfigurationService: UserConfigurationService, private WidgetsService: WidgetsService) { }

  ngOnInit() {
  	this.UserConfigurationService.pageCreationStep.subscribe(step => this.pageCreationStep = step);
  	this.UserConfigurationService.selectedWidgets.subscribe(widgets => this.selectedWidgets = widgets);
    this.UserConfigurationService.userGeneratedCode.subscribe(response => this.userGeneratedCode = response);
  }

}
