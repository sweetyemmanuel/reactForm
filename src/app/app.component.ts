import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ReactiveComponent} from './reactive/reactive.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms';
}
