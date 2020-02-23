import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-stage',
  templateUrl: './progress-stage.component.html',
  styleUrls: ['./progress-stage.component.scss']
})
export class ProgressStageComponent implements OnInit {
	@Input() widget;
	@Input() index;
	@Input() currentStep;
	constructor() { }

	IsStepCompleted() {
		return this.index < this.currentStep ? true : false;
	}

	ngOnInit() {
	}

}
