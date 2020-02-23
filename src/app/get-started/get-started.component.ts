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

  constructor(private UserConfigurationService: UserConfigurationService, private WidgetsService: WidgetsService) { }

  ngOnInit() {
  }

}
