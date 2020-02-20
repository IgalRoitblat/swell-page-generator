import { Component, OnInit } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';

@Component({
  selector: 'app-program-generator-controls',
  templateUrl: './program-generator-controls.component.html',
  styleUrls: ['./program-generator-controls.component.css']
})
export class ProgramGeneratorControlsComponent implements OnInit {
  constructor(private UserConfigurationService: UserConfigurationService) { }

  moveToNextStep() {
  	console.log("next")
  	this.UserConfigurationService.pageCreationStep++;
  }

  moveToPrevStep() {
  	console.log("prev")
  	this.UserConfigurationService.pageCreationStep--;
    this.UserConfigurationService.userGeneratedCode = false;
  }

  startOver() {
    console.log("start over");
    this.UserConfigurationService.pageCreationStep = 1;
    this.UserConfigurationService.userGeneratedCode = false;
  }

  generatePage() {
    console.log(this.UserConfigurationService.configuredWidgets)
  }

  ngOnInit() {
  }

}
