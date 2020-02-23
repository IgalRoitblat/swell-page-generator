import { Component, OnInit, Input } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';
import { WidgetsService } from '../Services/widgets.service';

@Component({
  selector: 'app-input-set',
  templateUrl: './input-set.component.html',
  styleUrls: ['./input-set.component.scss']
})
export class InputSetComponent implements OnInit {
	@Input() inputs;
	constructor(private UserConfigurationService: UserConfigurationService, private WidgetsService: WidgetsService) { }

  ngOnInit() {
  }

}
