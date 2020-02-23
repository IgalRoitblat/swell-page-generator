import { Component, OnInit } from '@angular/core';
import { UserConfigurationService } from '../Services/user-configuration.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(private UserConfigurationService: UserConfigurationService) { }

  ngOnInit() {
  }

}
