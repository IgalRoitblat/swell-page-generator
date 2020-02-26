import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

	constructor(private http:HttpClient) { }

	getWidgets() {
		return this.http.get('assets/data/widgets.json');
	}
}
