import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../Services/widgets.service';

@Component({
  selector: 'app-available-widgets',
  templateUrl: './available-widgets.component.html',
  styleUrls: ['./available-widgets.component.css']
})
export class AvailableWidgetsComponent implements OnInit {

  constructor(private WidgetsService: WidgetsService) { }

  ngOnInit() {
  }

}
