import { Component, OnInit } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';

@Component({
  selector: 'app-program-generator-controls',
  templateUrl: './program-generator-controls.component.html',
  styleUrls: ['./program-generator-controls.component.scss']
})
export class ProgramGeneratorControlsComponent implements OnInit {
  public pageCreationStep = 1;
  private selectedWidgets = [];
  constructor(private UserConfigurationService: UserConfigurationService) { }

  moveToNextStep() {
    this.UserConfigurationService.skipToNextPage();
  }

  moveToPrevStep() {
    this.UserConfigurationService.skipToPrevPage();
  }

  startOver() {
    this.UserConfigurationService.startOver();
  }

  generatePage() {
    this.UserConfigurationService.generatePageHTML();
  }

  canGeneratePage() {
    return this.pageCreationStep === this.selectedWidgets.length + 1 && this.pageCreationStep > 1
  }

  hasNextStep() {
    return this.pageCreationStep < this.selectedWidgets.length + 1
  }

  canGoBack() {
    return this.pageCreationStep > 2
  }

  canStartOver() {
    return this.pageCreationStep > 1
  }

  ngOnInit() {
    this.UserConfigurationService.pageCreationStep.subscribe(step => this.pageCreationStep = step);
    this.UserConfigurationService.selectedWidgets.subscribe(widgets => this.selectedWidgets = widgets);
  }

}
