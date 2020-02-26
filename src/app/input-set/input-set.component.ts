import { Component, OnInit, Input } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';
import { WidgetsService } from '../Services/widgets.service';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-set',
  templateUrl: './input-set.component.html',
  styleUrls: ['./input-set.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class InputSetComponent implements OnInit {
	@Input() inputs;
	@Input() formGroup;
	constructor(private UserConfigurationService: UserConfigurationService, private WidgetsService: WidgetsService) { }

  ngOnInit() {
  }

}
